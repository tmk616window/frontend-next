import {api} from '../common/client'
import axios from 'axios'

export const deleteProLang = (id: number) =>  {
    return api.delete('/prolongs' + id )}
