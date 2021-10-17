import '../styles/globals.css'
import '../pages/components/Task/task.css'
import type { AppProps } from 'next/app'
import {Navbar} from './components/Navbar'
import React, { useState, useEffect, createContext } from "react"
import { User } from "../src/type/interfaces"
import {getCurrentUser} from '../src/api/login/auth'
import {useRouter} from 'next/router'
import Top from './top'
import Register from './register'
import Login from './login'
import {execTest} from '../src/api/test'
import Cookies from "js-cookie"
import {getTasks} from '../src/api/task/GetTasks'
import {Task} from '../src/type/interfaces/task'

export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>
})


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  

  const handleGetCurrentUser = async () => {
    
    try {
      const _access_token = Cookies.get("_access_token")
      const _client = Cookies.get("_client")
      const _uid = Cookies.get("_uid")
      
      const res = await getCurrentUser()
      console.log(res?.data.currentUser.isLogin)

      if (res?.data.currentUser.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.currentUser.user)

        console.log(res?.data.currentUser)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false)

  }

  useEffect(() => {
    execTest()
    console.log()
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }: any) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return router.replace('/register') 
      }
    } else {
      return <></>
    }
  }



  return (
    <>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
          <Navbar/>
            <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  )
}
export default MyApp
