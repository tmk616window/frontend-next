import {api} from '../common/client'

export const createLike =  (userId:number, taskId: number) => {
    return api.post("/likes" , 
    {
        // task_id: taskId,
        // user_id: userId,
        task_id: 2,
        user_id: 3,

    }
    )}
