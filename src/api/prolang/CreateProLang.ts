import {api} from '../common/client'
import axios from 'axios'

export const createProLang = (lange: string) =>  {
    return api.post('/prolongs' , 
    {
        lange: lange,
        task_id: 1
    }
    )}
