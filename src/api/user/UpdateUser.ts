import {api} from '../common/client'
import {User} from '../../type/interfaces'

export const updateUser = (id: number, name:string, email:string, live:string, details:string, age:number) => {
    return api.patch<{user: User}>("/users/" + id, 
    {
        name: name,
        email: email,
        live: live,
        details: details,
        age: age
    }
    )}


