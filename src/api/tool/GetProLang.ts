import {api} from '../common/client'
import axios from 'axios'

export const getTools =  () => {
    return api.get<{tools: any}>("/tools")
  }
  