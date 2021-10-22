import {api} from '../../common/client'
import {Content} from '../../../type/interfaces'

export const destroyContent = (id:number) =>  {
    return api.delete<{content: Content}>('/contents/' + id)}
