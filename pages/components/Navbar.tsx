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

import { signOut } from "../../src/api/login/auth"
import Cookies from "js-cookie"
import { AuthContext } from "../_app"


export const Navbar = () => {

    let logo ={
        height: "200px",
        width: "200px"
    }    
    
    const useStyles = makeStyles((theme: Theme) => ({

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
      <AppBar position="absolute">
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


// return (
//     <div className="profile-details">
//       <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
//           <div className="container">
//               <a className="navbar-brand" href="#page-top"><Image src={Logo} alt="..."  /></a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                   Menu
//                   <i className="fas fa-bars ms-1"></i>
//               </button>
//               <div className="collapse navbar-collapse " id="navbarResponsive">
//                   <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
//                       <li className="nav-item"><a className="nav-link">作品を見る</a></li>
//                       <li className="nav-item"><a className="nav-link" href="#about">新規登録</a></li>
//                       <li className="nav-item"><Link href="/login"><a className="nav-link" href="#team">ログイン</a></Link></li>
//                   </ul>
//               </div>
//           </div>
//       </nav>
//   </div>

// )
