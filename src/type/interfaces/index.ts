// サインアップ
export interface SignUpParams {
    email: string
    password: string
    password_confirmation: string
    data: any
  }
  
  // サインイン
  export interface SignInParams {
    email: string
    password: string
    user: User
  }
  
  export interface currentUser {
    user: User
    isLogin: boolean
  }
  

  // ユーザー
  export interface User {
    id: number
    uid: string
    provider: string
    email: string
    name: string
    nickname?: string
    image?: string
    allowPasswordChange: boolean
    created_at: Date
    updated_at: Date
  }
  