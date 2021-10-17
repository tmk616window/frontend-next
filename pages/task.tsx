import {useEffect} from 'react'
import {getProLangs} from '../src/api/prolang/GetProLang'
import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import {TaskProfile} from './components/Task/TaskProfile';
  import {TaskDetails} from './components/Task/TaskDetails';
  import {TaskProlangs} from './components/Task/TaskProlangs'
  import {TaskTools} from './components/Task/TaskTools'
  import {TaskComment} from './components/Task/TaskComment'


  export default function Task() {

    useEffect( () => {
      getProLangs()
      console.log(getProLangs())

    }, [])
  

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
                lg={9}
                md={9}
                xs={12}
              >
                <TaskDetails />
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs />
                <br/>
                <TaskTools />
                <br/>
                <TaskProfile />
              </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <h3>コメント一覧</h3>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <h4>ユーザーめい</h4>
              <TaskComment/>
            </Grid>

            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
            </Grid>

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
  
  