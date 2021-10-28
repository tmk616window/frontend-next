import {api} from '../common/client'
import axios from 'axios'

export const createProLang = (lange:string, id:number) =>  {
    return api.post<{prolongs: any}>('/prolongs' , 
    {
        lange: lange,
        task_id: id
    }
    )}
