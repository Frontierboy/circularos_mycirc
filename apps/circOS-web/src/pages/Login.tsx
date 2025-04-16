import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
