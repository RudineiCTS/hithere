import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'


const db = getFirestore(app);
const MessagingService = {
  async getMessages(){
    const messages = await getDocs(collection(db,'messages'));
    const messagesList =  messages.docs.map(doc => doc.data());
    console.log(messagesList);
    return ;
  }
}
export default MessagingService;