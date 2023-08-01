
import { Container, Message, SendArea } from '../../styles/sosoStyle'
import { useEffect, useState } from 'react'
import ButtonSendMessage from '../../components/HandleSendMessage/Button'
import axios from 'axios';


export default function SosoPage() {

  const [message, setMessages] = useState('');

  const handleSendMessage = (e) => {
    setMessages(e.target.value)
    console.log(message)
  }

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/mensagensBen');
        setMessages(response.data)
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    getMessages();
   
  }, [])

  return (
    <>
      <Container>
        <section>
              {Array.isArray(message) ? (
                message.slice(-5).map((message) => (
                    <Message key={message.id}>
                    <p>{message.textValue.toString()}</p>
                    </Message>
                ))
              ) : (
                <p>Carregando mensagens...</p>
              )}
        </section>
        <SendArea>
          <textarea type='text'
          onChange={handleSendMessage}
          placeholder='type are you feeling'/>
          <ButtonSendMessage message={message} />
        </SendArea>
      </Container>
    </>
  )
}
