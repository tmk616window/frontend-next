import {User} from '../../type/interfaces'
import {getPrefectures} from '../../api/user/GetPrefectures'
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

interface UserProfile {
  user: User
}

 const AccountProfile:React.FC<UserProfile> = ({user},props) => (
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
          // src={user.avatar}
          // sx={{
          //   height: 100,
          //   width: 100
          // }}
        />
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
);


export default AccountProfile
