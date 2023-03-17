import { auth } from "@/services/firebase";
import {signInWithRedirect, getRedirectResult, UserCredential, User} from "firebase/auth";
import { useEffect, useState } from "react";
import { provider, } from "./api/auth/OauthWithFireabse";
import {HomePage} from './HomePage'
import styles from '../styles/home.module.css'


export default function Home() {
  const [user, setUser] = useState<User>();
  async function SignIn(){
     await signInWithRedirect(auth, provider);
  }
  useEffect(()=>{
  getRedirectResult(auth)
  .then((result) => {
    if(!result){
      return;
    }

    const user = result.user
    return setUser(user)
  }).catch((error) => {
    const errorCode = error.code;
    return errorCode;
  });
  },[])
  console.log(user)
  return (
    <> 
    {
      !user ? (
        <main className={styles.containerLogin}>
          <div className={styles.contentPage}>
            <button 
            className={styles.buttonSignIn}
            onClick={
              SignIn
            } >
              Login
            </button>
            <p className={styles.description}>HiThere é uma aplicação desenvolvida para aprendizagem, onde o objetivo é aperfeiçoar as habilidades em react e firebase! <br />
            </p>
            <strong className={styles.descriptionDestaque}> Bem Vindo ao Chat HiThere!!</strong>
          </div>
      </main>
      ) : (
        <HomePage dataUser={user}/>
     
      )
    }
    </>
  )
}
