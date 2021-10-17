import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import {AccountProfile} from './components/Account/AccountProfile';
import {AccountProfileDetails} from './components/Account/AccountProfileDetails';

export default function ProfilePage() {

  return (
  <>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

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
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />

          </Grid>
        </Grid>
        <br/>
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

