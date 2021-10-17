import React, { useState, useContext } from "react"
import * as Yup from 'yup';
import { Formik } from 'formik';
import Cookies from "js-cookie"
import { signUp } from "../src/api/login/auth"
import { SignUpParams } from "../src/type/interfaces"
import Image from 'next/image'
import { AuthContext } from "./_app"

import Regi from '../img/register.png'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';



const Register = () => {

  const { setIsSignedIn, setCurrentUser, currentUser } = useContext(AuthContext)


  let style = {
  margin: "100px 0px 0px 0px"
};

const handleSubmit = async (params:any) => {
  // e.preventDefault()


  try {
    const res = await signUp(params)
    console.log(res)

    if (res.status === 200) {

      Cookies.set("_access_token", res.headers["access-token"])
      Cookies.set("_client", res.headers["client"])
      Cookies.set("_uid", res.headers["uid"])

      setIsSignedIn(true)
      setCurrentUser(res.data.data)
      console.log(currentUser)

      // histroy.push("/")

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
              password: '',
              password_confirmation: '',
            }}
            validationSchema={
            Yup.object().shape({
              email: Yup.string().email('メールアドレスが必要です').max(255).required('メールアドレスを入力してください'),
              password: Yup.string().max(255).required('パスワードを入力してください'),
            })
          }
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
                    アカウント作成
                  </Typography>
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
                    <Image alt="resister" src={Regi} width="140" height="140"/>
                  </Typography>
                </Box>
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
                  <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="パスワード確認"
                  margin="normal"
                  name="password_confirmation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password_confirmation}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="secondary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    // disabled={ !values.email || !values.password || !values.password_confirmation ? true : false}
                    variant="contained"
                  >
                    アカウント作成
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  アカウントをお持ちですか？
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
    </div>
  );
};

export default Register
