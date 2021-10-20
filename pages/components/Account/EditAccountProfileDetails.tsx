import { useState } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {User} from '../../../src/type/interfaces'
import {updateUser} from '../../../src/api/user/UpdateUser'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  TextareaAutosize
} from '@material-ui/core';

interface UserProfile {
  user: User
  setEdit: any
}




const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

 const EditAccountProfileDetails:React.FC<UserProfile> = ({user, setEdit}) => {
  const [values, setValues] = useState<any>({
    name: user.name,
    email: user.email,
    live: user.live,
    details: user.details,
    age: user.age
  });
  


  const handleChange = (event: any) => {    
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div className="profile-details">
      <Card>
        <CardHeader
          title="プロフィール"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <p>{user.name}</p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <p>{user.email}</p>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <p>{user.age}歳</p>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <p>{user.live}</p>
            </Grid>
            <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <p>使用プログラミング言語</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>
            <p className="article">vue.js</p>

          </Grid>

            <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <p>詳細プロフィール</p>
            <p>{user.details}</p>
          </Grid>

          </Grid>
          <Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            onClick={() =>{setEdit(false)}}
          >
            編集
          </Button>
        </Box>
      </Card>
      </div>
  );
};

export default EditAccountProfileDetails