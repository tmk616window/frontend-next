import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Divider
  } from '@material-ui/core';
import {getRoom} from '../src/api/chat/room/GetRoom'
import {getMessage} from '../src/api/chat/message/GetMessage'

  //サーバーサイドレンダリング
  export async function getServerSideProps(context:any) {
    const id = context.query.id;
    const room = (await getRoom(id)).data
    const messages = (await getMessage(id)).data
    return {
      props: {
        id: id,
        room:room,
        messages:messages                
      }
    }
  }
  
  
  const ChatRoom =() => {
    return (
    <>
    
    </>
  );
  }
  
  export default ChatRoom
  