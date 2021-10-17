import {api} from '../common/client'
import axios from 'axios'

export const deleteTool = (id: number) =>  {
    return api.delete('/tools' + id )}
