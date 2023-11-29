import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useGlobalApi } from "../../manager/ContextProvider";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../../config";
import { FiX } from "react-icons/fi";
import { LoadingButton } from "../../components/Buttons";

export default function Forms() {
  const { showForm, setShowForm } = useGlobalApi();
  return (
    <div className="h-[dvh] fixed inset-0 bg-cl5/50 backdrop-blur-md z-50 flex items-center justify-center">
      {showForm !== "login" ? (
        <RegisterForm setShowForm={setShowForm} />
      ) : (
        <LoginForm setShowForm={setShowForm} />
      )}
    </div>
  );
}

// LOGIN USER
function LoginForm() {
  const { setShowForm, setProfile } = useGlobalApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value && emailRef.current.value) {
      setMessage("");
      setIsLoading(true);
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          setProfile({
            name: userCredential.user.displayName,
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            avatar: userCredential.user.photoURL,
          });
          console.log(userCredential.user.uid);
          setIsLoading(false);
          setShowForm(null);
        })
        .catch((err) => {
          const msg = mapAuthCodeToMessage(err.code);
          setMessage(msg);
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="flex h-[max-content] md:w-[60%] w-[85%] bg-white rounded-md overflow-hidden shadow-lg relative">
      <CloseForm setShowForm={setShowForm} />
      <div className="flex-1 px-8 py-5">
        <h3 className="text-2xl text-center">Login</h3>
        {message && (
          <span className="text-center text-red-600 block mt-3">{message}</span>
        )}
        <div className="my-5">
          <form onSubmit={handleSubmit}>
            <div className="flex rounded overflow-hidden border border-cl1 mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-50 w-full focus:outline-none focus:border-none px-3"
                type="text"
                ref={emailRef}
                disabled={isLoading}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex rounded overflow-hidden border border-cl1 mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-50 w-full focus:outline-none focus:border-none px-3"
                type="text"
                placeholder="Enter password"
                required
                disabled={isLoading}
                ref={passwordRef}
              />
            </div>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                className="w-full bg-cl1 text-white rounded py-2"
                type="submit"
                disabled={isLoading}
              >
                Login
              </button>
            )}
          </form>
        </div>
        <SocilaMediaAuth />
        <button
          className="w-full text-center mt-4"
          onClick={() => setShowForm("signup")}
        >
          I Don't have account <span className="text-blue-500">Sign Up</span>
        </button>
      </div>
      <div className="md:flex hidden flex-1 form-sidebar"></div>
    </div>
  );
}

// REGISTER NEW USER
function RegisterForm() {
  const { setShowForm, setProfile } = useGlobalApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    if (passwordRef.current.value && emailRef.current.value) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        await userCredential.user.updateProfile({
          displayName: nameRef.current.value,
        });
        console.log("User signed up successfully:", userCredential.user);
      } catch (error) {
        const msg = mapAuthCodeToMessage(error.code);
        setMessage(msg);
        setIsLoading(false);
      }
      // createUserWithEmailAndPassword(
      //   auth,
      //   emailRef.current.value,
      //   passwordRef.current.value
      // )
      // .then((userCredential) => {
      //   userCredential.updateProfile({ displayName: nameRef.current.value });
      //   setProfile({
      //     name: "",
      //     email: userCredential.email,
      //     uid: userCredential.uid,
      //     avatar: userCredential.photoURL,
      //   });
      //   setIsLoading(false);
      //   setShowForm(null);
      // })
      // .catch((err) => {
      //   const msg = mapAuthCodeToMessage(err.code);
      //   setMessage(msg);
      //   setIsLoading(false);
      // });
    }
  };
  return (
    <div className="flex items-cente h-[max-content] md:w-[60%] w-[85%] bg-white rounded-md overflow-hidden shadow-lg relative">
      <CloseForm setShowForm={setShowForm} />
      <div className="flex-1 px-8 py-5">
        <h3 className="text-2xl font-thin">Register</h3>
        {message && (
          <span className="text-center text-red-600 block mt-3">{message}</span>
        )}
        <div className="my-5">
          <form onSubmit={handleSubmit}>
            <div className="flex rounded overflow-hidden border border-cl1 mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-50 w-full focus:outline-none focus:border-none px-3"
                type="text"
                placeholder="Your name"
                disabled={isLoading}
                ref={nameRef}
                required
              />
            </div>
            <div className="flex rounded overflow-hidden border border-cl1 mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-50 w-full focus:outline-none focus:border-none px-3"
                type="text"
                placeholder="Enter E-mail"
                ref={emailRef}
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex rounded overflow-hidden border border-cl1 mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-50 w-full focus:outline-none focus:border-none px-3"
                type="text"
                placeholder="Enter password"
                required
                disabled={isLoading}
                ref={passwordRef}
              />
            </div>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                className="w-full bg-cl1 text-white rounded py-2"
                type="submit"
                disabled={isLoading}
              >
                Register
              </button>
            )}
          </form>
        </div>
        <SocilaMediaAuth />
        <button
          className="w-full text-center mt-5"
          onClick={() => setShowForm("login")}
        >
          Already have account <span className="text-blue-500">Login</span>
        </button>
      </div>
      <div className="md:flex hidden flex-1 form-sidebar"></div>
    </div>
  );
}

function SocilaMediaAuth({ cName = "" }) {
  const { setProfile, setShowForm } = useGlobalApi();
  const [message, setMessage] = useState("");

  const GoogleAuthHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(
      (credential) => {
        const user = {
          name: credential.user.displayName,
          email: credential.user.email,
          uid: credential.user.uid,
          avatar: credential.user.photoURL,
        };
        setProfile(user);
        setShowForm(null);
      },
      (err) => {
        console.dir(err);
        setMessage(err?.code?.split("/")[1]);
      }
    );
  };

  return (
    <div className={`text-center ${cName}`}>
      <h3 className="mb-3 font-thin text-xl">Or Login with</h3>
      {message && message}
      <div className="flex justify-evenly">
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-sky-600 text-white">
          <FaFacebook className="text-xl" />
        </button>
        <button
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-red-600 text-white"
          onClick={GoogleAuthHandler}
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-red-600 text-white"
          onClick={GoogleAuthHandler}
        >
          <FaTwitter className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

function CloseForm({ setShowForm }) {
  return (
    <div
      className="border border-red-500 bg-white rounded-full absolute right-2 top-2 p-2 md:text-xl z-50"
      onClick={() => setShowForm(null)}
    >
      <FiX />
    </div>
  );
}

function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/invalid-login-credentials":
      return "invalid login credentials";
    case "auth/too-many-requests":
      return "too many failed login attempts";
    case "auth/email-already-in-use":
      return "this E-mail exists";
    case "auth/invalid-password":
      return "Password provided is not corrected";
    case "auth/invalid-email":
      return "Email provided is invalid";
    case "auth/weak-password":
      return "weak-password";
    default:
      return "";
  }
}
