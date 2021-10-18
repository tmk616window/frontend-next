import {api} from '../../common/client'

export const createContent = (title: string, text:string) =>  {
    return api.post('/contents' , 
    {
        title: title,
        text: text,
        task_id: 3,
    }
    )}
