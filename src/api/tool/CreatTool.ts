import {api} from '../common/client'
import axios from 'axios'

export const createTool = (tool: string) =>  {
    return api.post('/tools' , 
    {
        name: tool,
        task_id: 1
    }
    )}
