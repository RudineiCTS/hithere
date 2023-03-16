import { auth } from "@/services/firebase";
import {signInWithRedirect, getRedirectResult} from "firebase/auth";
import { useEffect } from "react";
import { provider, } from "./api/auth/OauthWithFireabse";


export default function Home() {
  async function SignIn(){
     await signInWithRedirect(auth, provider);
  }
  useEffect(()=>{
  getRedirectResult(auth)
  .then((result) => {
    if(!result){
      return;
    }
    const user = result.user;
    console.log(user)
    return user;

  }).catch((error) => {
    const errorCode = error.code;
    return errorCode;
  });
  },[])

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
