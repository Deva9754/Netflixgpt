import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/Userslice";
import { onAuthStateChanged } from "firebase/auth";
import { addGptMovieResult, toggleGptSearchView } from "../utils/GptSlice";
import { changeLang } from "../utils/ConfigSlice";
import { SUPPORTED_LANG } from "../utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/")
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleGptSearchClick = () => {
    //toggle
    dispatch(toggleGptSearchView());
    dispatch(addGptMovieResult({ movieResults: null, movieNames: null }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="mx-auto md:mx-0  object-fill opacity-80 rounded-xl cursor-pointer "
        height={60}
        width={110}
        src="https://s3.amazonaws.com/logos-brandpa-com/uploads/watchita-logo-thumbnail.png"
        alt="Netflix logo"
      ></img>
      {user && (
        <div className=" flex pl-24 justify-items-end">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-[#0f79af] text-white rounded-xl font-bold"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 px-4 mx-4 my-2 bg-[#0f79af] rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
        </div>
      )}
      {user ? (
        <div className="flex gap-2 items-center">
          <img
            className="hidden md:inline-block w-12 h-12 rounded-full "
            alt="loading"
            src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
          />
          <button onClick={handleSignOut} className=" font-bold text-white">
            Sign Out{" "}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
