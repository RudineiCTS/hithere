import MessagingService from '@/services/messagingService'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    MessagingService.getMessages()
  }, [])
  return (
    <>
    <p>olá mundo</p>
     
    </>
  )
}
