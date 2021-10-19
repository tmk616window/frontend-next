import {api} from '../common/client'

export const getProLangs = (id: number) => {
    return api.get<{prolangs: any}>("/prolongs" + id)
  }
  