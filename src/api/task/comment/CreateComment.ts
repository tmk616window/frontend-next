import {api} from '../../common/client'

export const createComment = (text: string) =>  {
    return api.post('/comments' , 
    {
        text: text,
        task_id: 21,
        user_id: 1
    }
    )}
