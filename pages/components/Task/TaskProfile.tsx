import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@material-ui/core';
  
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  
  export const TaskProfile = () => (
    <>
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Image alt="img" src={Logo} height="800"/>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            <p>mdepwpoew</p>
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {/* {`${moment().format('hh:mm A')} ${user.timezone}`} */}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      
    </Card>
    </>
  );
  
  
  