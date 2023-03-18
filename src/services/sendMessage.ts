import { collection, addDoc, getFirestore} from "firebase/firestore";
import firebase from './firebase';

interface messageDTO{
  message: string;
  userId: string;
}

const db = getFirestore(firebase);
export async function sendMessage({message, userId}:messageDTO){
  try{
    const docRef = await addDoc(collection(db, 'messages'),{
      message,
      userId
    })
    console.log("Document written with ID: ", docRef.id);
    console.log({message, userId});
  }catch(err){
    console.log(err)
  }
}