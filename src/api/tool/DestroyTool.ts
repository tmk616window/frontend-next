import {api} from '../common/client'
import axios from 'axios'

export const destroyTool = (id: number) =>  {
    return api.delete('/tools/' + id )}
