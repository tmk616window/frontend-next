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
    email: string
    name: string
    image?: {
      url: string
    }
    details: string
    live:string
    age: number
  }
  

  export interface Task {
    id: number
    title: string
    description: string
    logoImage: string
    purl: string
    user_id: number
  }

  export interface Tool {
    id: number
    name: string
    task_id: number
  }

  export interface ProLang {
    id: number
    lange: string
    task_id: number
  }

  export interface Comment{
    id: number,
    text: string,
    user: User,
    task_id: number,
    user_id: number,
  }

  export interface Content{
    id?: number
    title: string,
    text: string,
    task_id?: number,
  }


