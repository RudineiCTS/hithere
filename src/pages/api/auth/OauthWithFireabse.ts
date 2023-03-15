import firebase from "@/services/firebase";
import { getAuth, GithubAuthProvider} from "firebase/auth";

export  const provider = new GithubAuthProvider();
export const auth = getAuth(firebase);
