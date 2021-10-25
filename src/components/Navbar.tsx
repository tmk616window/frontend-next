import React, { useContext } from "react"
// import { useHistory, Link } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"

import Link from 'next/link'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import { signOut } from "../api/login/auth"
import Cookies from "js-cookie"
import { AuthContext } from "../../pages/_app"


 const Navbar = () => {

    let logo ={
        height: "200px",
        width: "200px"
    }    
    
    const useStyles = makeStyles((theme: Theme) => ({
        nabvarBottom: {
          
        },

        iconButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          textDecoration: "none",
          color: "inherit"
        },
        linkBtn: {
          textTransform: "none"
        }
      }))
    

    const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
    const classes = useStyles()
    // const histroy = useHistory()


    const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {

          const _access_token = Cookies.get("_access_token")
          const _client = Cookies.get("_client")
          const _uid = Cookies.get("_uid")
          
          const params = {
            "access-token": _access_token,
            "client": _client,
            "uid": _uid    
          }
          // console.log(params)
          const res = await signOut(params)
          console.log(res)
    
          if (res.data.success === true) {
            // サインアウト時には各Cookieを削除
            Cookies.remove("_access_token")
            Cookies.remove("_client")
            Cookies.remove("_uid")
    
            setIsSignedIn(false)
            // histroy.push("/signin")
    
            console.log("Succeeded in sign out")
          } else {
            console.log("Failed in sign out")
          }
        } catch (err) {
          console.log(err)
        }
      }
    
      const AuthButtons = () => {
        if (!loading) {
          if (isSignedIn) {
            
            return (
              <Button
                color="inherit"
                className={classes.linkBtn}
                onClick={handleSignOut}
              >
                ログアウト
              </Button>
            )
          } else {
            return (
              <>
                <Link href="/tasks" >
                  一覧
                </Link>
                <Link href="/task/new" >
                  投稿
                </Link>

                <Link href="/login" >
                  ログイン
                </Link>
                <Link href="/register" >
                  新規作成
                </Link>
              </>
            )
          }
        } else {
          return <></>
        }
      }
    

  return (
    <>
      <AppBar position="absolute" className={classes.nabvarBottom}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.iconButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            // component={Link}
            // to="/"
            variant="h6"
            className={classes.title}
          >
            エンジョブ
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Navbar