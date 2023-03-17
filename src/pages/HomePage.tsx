import { sendMessage } from '@/services/sendMessage'
import styles from '@/styles/chatpage.module.css'
import { User } from 'firebase/auth'
import { useState } from 'react'

interface HomePageProps {
  dataUser: User
}

export  function HomePage({dataUser}:HomePageProps) {
  const [messageText, setMessageText] = useState('')


  function handleForm(event:any){
    event.preventDefault()
    const email = dataUser.email;
    if(!email){
      alert('Não foi possível localizar conta')
      return;
    }
    sendMessage({message: messageText, userId:email})
  }
  function handleChangeMessage(event:any){
    setMessageText(event.target.value)
    console.log(messageText)
  }
  return (
    <>  
      <main className={styles.main}>
      
      <div className={styles.containerHistoric}>
        ola
      </div>
      


        <section className={styles.containerMessage}>
          <form 
          onSubmit={handleForm}
          className={styles.contentMessageInput}>
            <input 
            value={messageText}
            onChange={handleChangeMessage}
            type="text" 
            className={styles.inputMessage}/>
          </form>
        </section>

      </main>
    </>
  )
}
