import {api} from '../common/client'
import axios from 'axios'

export const updateTask = (title: string, logoImage:string, purl:string,description:string, id:number, userId:number) =>  {
    return api.patch("/tasks/" + id,
    {
        title: title,
        logoImage: logoImage,
        purl: purl,
        description: description,
    }
    )}
