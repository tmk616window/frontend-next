import {api} from '../../common/client'
import {Content} from '../../../type/interfaces'

export const updateContent = (title: string, text:string, id:number) =>  {
    return api.patch<{content: Content}>('/contents' , 
    {
        title: title,
        text: text,
        task_id: id,
    }
    )}
