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
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
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
    <div className="absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img
        className="mx-auto md:mx-0 w-36 md:w-44"
        height={60}
        width={146}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex items-center md:pl-24">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-purple-300 text-white rounded-xl font-semibold"
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
            className="p-2 mx-2 md:mx-4 my-2 bg-purple-700 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
        </div>
      )}
      {user ? (
        <div className="flex items-center ml-auto">
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
