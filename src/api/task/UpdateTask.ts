import {api} from '../common/client'
import axios from 'axios'

export const updateTask = (id:number, data:FormData) =>  {
    return api.patch("/tasks/" + id, data)}
