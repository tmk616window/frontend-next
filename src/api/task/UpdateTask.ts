import {api} from '../common/client'
import axios from 'axios'

export const updateTask = (title: string, logoImage:string, purl:string,description:string, id:number, userId:number) =>  {
    return axios.patch('http://localhost/api/v1/tasks/' + id, 
    {
        title: title,
        logoImage: logoImage,
        purl: purl,
        description: description,
        user_id: userId
    }
    )}
