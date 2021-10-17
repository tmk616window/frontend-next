import {client} from './common/client'
import axios from 'axios' 

export const execTest = () => {
    return client.get("test")
  }
  