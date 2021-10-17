import {client} from "../common/client"
import Cookies from "js-cookie"
import axios from 'axios'
import { SignUpParams, SignInParams, currentUser,User } from "../../type/interfaces"

// サインアップ（新規アカウント作成）
export const signUp = (params: SignUpParams) => {
  return client.post("auth", params)
}

// サインイン（ログイン）
export const signIn = (params: SignInParams)  => {
  return client.post("auth/sign_in", params)
}

// サインアウト（ログアウト）
export const signOut = (params:any) => {
  return axios.delete<{success: boolean}>("http://localhost/api/v1/auth/sign_out", {headers: params})  
}

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return axios.get<{currentUser: currentUser}>("http://localhost/api/v1/auth/sessions")
}

