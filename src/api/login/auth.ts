import {client} from "../common/client"
import Cookies from "js-cookie"
import axios from 'axios'
import { SignUpParams, SignInParams, currentUser,User, SignIn } from "../../type/interfaces"

// サインアップ（新規アカウント作成）
export const signUp = (params: SignUpParams) => {
  return client.post("auth", params)
}

// サインイン（ログイン）
export const signIn = (params: SignInParams)  => {
  return client.post<{data: SignIn}>("auth/sign_in", params)
}

// サインアウト（ログアウト）
export const signOut = (params:any) => {
  return axios.delete<{success: boolean}>("http://localhost/api/v1/auth/sign_out", {headers: params})  
}

// 認証済みのユーザーを取得
export const getCurrentUser = (token:any, client:any, uid:any) => {
  if (!token || !client || !uid) return
  return axios.get<{currentUser: currentUser}>("http://localhost/api/v1/auth/sessions", {
    headers: {
      "access-token": token,
      "client": client,
      "uid": uid
    }
  })
}
