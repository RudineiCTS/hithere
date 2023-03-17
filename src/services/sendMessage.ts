import {doc, getFirestore, setDoc} from 'firebase/firestore'
import firebase from './firebase';

interface messageDTO{
  message: string;
  userId: string;
}

const db = getFirestore(firebase);
export async function sendMessage({message, userId}:messageDTO){
  try{
    await setDoc(doc(db, 'messages'),{
      message,
      userId,
    })
  }catch(err){
    console.log(err)
  }
}