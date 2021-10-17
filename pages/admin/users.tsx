// import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import UserListResults from '../components/Admin/UserListResults';
import UserListToolbar from '../components/Admin/UserListToolbar';
import users from '../../__mocks__/users';

const UserList = () => (
  <>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

    {/* <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet> */}
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ pt: 3 }}>
          <UserListResults />
        </Box>
      </Container>
  </>
);

export default UserList;
