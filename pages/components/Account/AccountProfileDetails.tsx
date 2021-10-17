import { useState } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

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

export const AccountProfileDetails = (props: any) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
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
              <TextField
                fullWidth
                label="名前"
                name="名前"
                onChange={handleChange}
                required
                value={values.firstName}
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
                label="Twitterアカウント"
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
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
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
                label="職業"
                name="職業"
                onChange={handleChange}
                required
                value={values.country}
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
                label="在宅居住地"
                name="在宅居住地"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
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
            <p>詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール詳細プロフィール</p>
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
          >
            保存
          </Button>
        </Box>
      </Card>
      </div>
  );
};

