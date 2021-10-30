import {User} from '../../type/interfaces'
import {getPrefectures} from '../../api/user/GetPrefectures'
import {useEffect} from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  CardMedia,
  
} from '@material-ui/core';
import Image from 'next/image'
import {displayImage} from '../../api/common/DisplayImage'
import {} from '@material-ui/core/';
interface UserProfile {
  user: User
}

 const AccountProfile:React.FC<UserProfile> = ({user}) => {

  useEffect(() => {
    console.log("user", user.image?.url)
  }, [])


  return (
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
        
        <Avatar 
        src={displayImage(`http://localhost/${user.image?.url}`)}
        />
        <br/>

        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          <p>{user.email}</p>
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="secondary"
        fullWidth
        variant="text"
      >
        画像編集
      </Button>
    </CardActions>
  </Card>
  </>
  )
};


export default AccountProfile