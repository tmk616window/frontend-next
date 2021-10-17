import {api} from '../../common/client'
import axios from 'axios'

export const getTasks =  () => {
    return api.get<{comments: any}>("/comments")
  }