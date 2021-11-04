import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Divider
} from '@material-ui/core';
import AccountProfile from '../src/components/Account/AccountProfile';
import AccountProfileDetails from '../src/components/Account/AccountProfileDetails';
import EditAccountProfileDetails from '../src/components/Account/EditAccountProfileDetails';
import {getUser} from '../src/api/user/GetUser'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {getProLangs} from '../src/api/prolang/GetProLang'
import {Task} from '../src/type/interfaces'

//サーバーサイドレンダリング
export async function getServerSideProps(context:any) {
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
  const u = props.user.user.user
  const t = props.user.user.task
  const[user, setUser] = useState(u)

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
            <br/>
            <Card>
              <CardContent>
              <h2>投稿したポートフォリオ</h2>
              <Divider />
              <br/>
                {t.map((task:Task, index:number) =>
                <div key={index}>
                    <Link href={{ pathname: '/task', query: { id: task.id } }} >{task.title}</Link>
                    <br/>
                </div>
                )}
              </CardContent>    
            </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            {edit
                  ? <EditAccountProfileDetails user={user} setEdit={setEdit} />

                  
                    : <AccountProfileDetails user={user} setEdit={setEdit} setUser={setUser}/>
                }
          </Grid>
        </Grid>
        <Grid
            spacing={3}
            lg={4}
            md={6}
            xs={12}
          >
        </Grid>
      </Container>
    </Box>
  </>
);
}

export default ProfilePage
