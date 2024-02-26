import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Userslice";
import checkvalidation from "../utils/Validate";
import "../App.css";
import Header from "./Header";

const Login = () => {
  const [isSignIN, SetisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleButtonChage = () => {
    const message = checkvalidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIN) {
      //Singn up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
          // ..
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "--" + errorMessage);
        });
    }

    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
  };

  const toogleSignIn = () => {
    SetisSignIn(!isSignIN);
  };
  return (
    <div className="h-full">
      <Header />
      <div className=" absolute">
        <img
          className="h-screen object-cover w-screen"
          src="https://thefatork.store/cdn/shop/articles/netflix.jpg?v=1669877376"
          alt="Background"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-80"
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignIN ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIN && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="p-2 my-4 rounded-lg w-full bg-gray-700"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter Your Email"
          className="p-2 my-4 rounded-lg w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="Password"
          placeholder="Enter Your Password"
          className="p-2 my-4 rounded-lg w-full bg-gray-700"
        ></input>
        <p className=" text-lg font-bold text-white-600">{errorMessage}</p>

        <button
          className="p-2 my-6 rounded-lg bg-red-700 w-full"
          onClick={handleButtonChage}
        >
          {isSignIN ? "Sign In" : "Sign Up"}{" "}
        </button>

        <h1 className=" flex justify-end cursor-pointer ">Need help?</h1>
        <h1 className=" cursor-pointer p-3" onClick={toogleSignIn}>
          {isSignIN
            ? "New to Netflix? Sign Up Now"
            : "Already a User Login Now"}
        </h1>
      </form>
    </div>
  );
};

export default Login;
