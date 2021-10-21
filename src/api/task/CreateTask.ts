import {api} from '../common/client'
import {Task} from '../../type/interfaces'

export const createTask = (title: string, logoImage:string, purl:string,description:string) =>  {
    return api.post<{task: Task}>('/tasks' , 
    {
        title: title,
        logoImage: logoImage,
        purl: purl,
        description: description,
        user_id: 3
    }
    )}
