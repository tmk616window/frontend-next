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

export const TaskDetails = (props: any) => {
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
      <Card>
        <CardHeader
          title="題名"
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
              <Image alt="logo" src={Logo} height="800"/>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >

            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <h3>作品URL</h3>
                <p>testtesttesttesttesttesttesttesttest</p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <h3>概要</h3>
                <p>、dl３、ld、３、dl３、ld、３、dl、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３３、ld、３、dl３、ld、３、dl３、ld、３、dl３、ld、３</p>
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
            編集
          </Button>
        </Box>
      </Card>
  );
};

