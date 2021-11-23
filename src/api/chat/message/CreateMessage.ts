import {api} from '../../common/client'
import {Message} from '../../../type/interfaces'

export const createMessage= (id:number,text:string,userId:number, currentid:number, ) => {
    return api.post<{message: Message}>("/chat_messages" , 
    {
        message_id: id,
        text: text,
        user_id: userId,
        chat_id: currentid,
    }
    )}
