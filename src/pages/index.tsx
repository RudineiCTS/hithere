import firebase from "@/services/firebase"
import { getAuth, signInWithRedirect, GithubAuthProvider} from "firebase/auth";
import { auth, provider } from "./api/auth/OauthWithFireabse";


export default function Home() {
  function SignIn(){
    signInWithRedirect(auth, provider);
  }
  return (
    <>  
      <button onClick={
        SignIn
      } >
        login
      </button>
    </>
  )
}
