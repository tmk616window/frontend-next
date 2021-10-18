import {api} from '../common/client'
import {Task} from '../../type/interfaces/task'

export const getTask =  (id: any) => {
    return api.get<{tasks: Task}>("/tasks/" + id)
  }
