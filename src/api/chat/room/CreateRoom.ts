import {api} from '../../common/client'
import {Room} from '../../../type/interfaces'

export const createRoom= (userId:number, currentid:number, ) => {
    return api.post<{room: Room}>("/rooms" , 
    {
        user: userId,
        chat_id: currentid,
    }
    )}
