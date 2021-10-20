import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from './components/Account/AccountProfile';
import AccountProfileDetails from './components/Account/AccountProfileDetails';
import EditAccountProfileDetails from './components/Account/EditAccountProfileDetails';

import {getUser} from '../src/api/user/GetUser'
import {useEffect, useState} from 'react'
import {getProLangs} from '../src/api/prolang/GetProLang'

//サーバーサイドレンダリング
export async function getServerSideProps(context) {
  const id = context.query.id;
  const user = (await getUser(id)).data
  const p = (await getProLangs(id)).data
  return {
    props: {
      user: user,
      p: p,
      id: id,                
    }
  }
}


const ProfilePage =(props:any) => {
  const [edit, setEdit] = useState<boolean>(true)
  const id = props.id
  const user = props.user.user
  const p = props.p
  const[u, setU] = useState(user)
 
  
  return (
  <>
    <Box
      sx={{
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile user={user}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >

            {edit
                  ? <EditAccountProfileDetails user={user} setEdit={setEdit} />

                  
                    : <AccountProfileDetails user={user} setEdit={setEdit}/>
                }


            

          </Grid>
        </Grid>
        <Grid
            spacing={3}
            lg={4}
            md={6}
            xs={12}
          >
            <h2>投稿したポートフォリオ</h2>
        </Grid>
      </Container>



    </Box>
  </>
);
}

export default ProfilePage
