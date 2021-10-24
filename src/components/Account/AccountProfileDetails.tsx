import { useState } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {User} from '../../type/interfaces'
import {updateUser} from '../../api/user/UpdateUser'

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


 const AccountProfileDetails:React.FC<UserProfile> = ({user, setEdit}) => {
  const [fileUrl, setFileUrl] = useState<string>("");

  const [values, setValues] = useState<any>({
    name: user.name,
    email: user.email,
    live: user.live,
    details: user.details,
    age: user.age,
    image: ""
  });
    
  
  const patchUser = () => {    
    updateUser(user.id, values.Name, values.email, values.live, values.details, values.age, values.image)
    setEdit(true)
    // location.reload();
  };


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
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="写真"
                name="image"
                onChange={handleChange}
                type="file"
                value={values.image}
                variant="outlined"
              />
            </Grid>

          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="名前"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="メールアドレス"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="年齢"
                name="age"
                onChange={handleChange}
                type="number"
                value={values.age}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="都道府県"
                name="live"
                onChange={handleChange}
                required
                // select
                // SelectProps={{ native: true }}
                value={values.live}
                variant="outlined"
              >
              </TextField>
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
            <TextareaAutosize
            name="details"
              minRows={7}
              value={values.details}
              style={{ width: "100%" }}
              onChange={handleChange}
          />
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
            onClick={() =>{patchUser()}}
          >
            保存
          </Button>
        </Box>
      </Card>
      </div>
  );
};

export default AccountProfileDetails