import "./login.css";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { addUserToDb } from "../../config/firebase";
function Login() {
  const navigate = useNavigate();
  const signin = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const uid = user.uid;
        addUserToDb(name, email, uid);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <div className="login">
      <div className="login-box">
        <h1>Welcome to Q App</h1>
        <button className="login-btn" onClick={signin}>
          sigin with facebook
        </button>
      </div>
    </div>
  );
}
export default Login;
