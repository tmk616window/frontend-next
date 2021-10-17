import * as Yup from 'yup';
import Image from 'next/image'
import { Formik } from 'formik';
import LogIn from '../img/login.png'
import Cookies from "js-cookie"
import {SignInParams} from '../src/type/interfaces'
import { signIn } from "../src/api/login/auth";
import { AuthContext } from "./_app"
import React, { useState, useContext } from "react"


import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
let style = {
  // backgroundColor: "#13EEFF",
  margin: "100px 0px 0px 0px",
  // padding: "200px 0px 190px 0px"
};



const Login: React.FC = () => {

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const handleSubmit = async (params:any) => {
    console.log(params)

    try {
      const res = await signIn(params)
      console.log(res)

      if (res.status === 200) {
        // ログインに成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.user)

        // history.push("/")

        console.log("Signed in successfully!")
      } else {
        // setAlertMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      // setAlertMessageOpen(true)
    }


}


  return (
    <div>
    <>
    <br/>
    <br/>
    <br/>
    <br/>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('メールアドレスを入力してください').max(255).required('メールアドレスを入力してください'),
              password: Yup.string().max(255).required('パスワードを入力してください')
            })}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h3"
                  >
                    ログイン
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    <Image alt="login" src={LogIn} width="100" height="100"/>
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="メールアドレス"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="パスワード"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="secondary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    ログイン
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  アカウントをお持ちですか?
                  {' '}
                  <Link >
                    ログイン
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
    </div>
  );
};

export default Login