import {TransitionsModal} from './modal'
import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import {NewTaskDetails} from '../components/Task/NewTaskDetails';
  import {TaskProlangs} from '../components/Task/TaskProlangs'
  import {TaskTools} from '../components/Task/TaskTools'

  export default function Task() {

    return(
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
                lg={8}
                md={8}
                xs={12}
              >
                <NewTaskDetails />
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xs={12}
              >
                <TaskProlangs/>
                <br/>
                <TaskTools/>
              </Grid>
            </Grid>
            <TransitionsModal/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

          </Container>
        </Box>
      </>  
    )
  };
  
  