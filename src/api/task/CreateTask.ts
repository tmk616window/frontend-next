import {api} from '../common/client'

export const createTask = (title: string, logoImage:string, purl:string,description:string) =>  {
    return api.post('/tasks' , 
    {
        title: title,
        logoImage: logoImage,
        purl: purl,
        description: description,
        user_id: 3
    }
    )}
