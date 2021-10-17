import {api} from '../common/client'
import axios from 'axios'

export const getProLangs =  () => {
    return api.get<{prolangs: any}>("/prolongs")
  }
  