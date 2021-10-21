import {api} from '../common/client'
import axios from 'axios'

export const createTool = (tool: string, id:number) =>  {
    return api.post('/tools' , 
    {
        name: tool,
        task_id: id
    }
    )}
