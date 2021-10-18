import {useEffect} from 'react'
import {getProLangs} from '../src/api/prolang/GetProLang'
import {
    Box,
    Container,
    Grid,
    IconButton
  } from '@material-ui/core';
  import Favorite from '@material-ui/icons/Favorite';

  import TaskProfile from './components/Task/TaskProfile';
  import TaskDetails from './components/Task/TaskDetails';
  import TaskProlangs from './components/Task/TaskProlangs'
  import TaskTools from './components/Task/TaskTools'
  import TaskComment from './components/Task/TaskComment'
  import {createLike} from '../src/api/like/CreateLike'
  import { makeStyles } from '@material-ui/core/styles'

  const useStyles = makeStyles({
    customButton: {
      position: "fixed",
      bottom: "50px",
      left: "30px",
      // padding: "6px 40px",
        },
  })
  

  export default function Task() {
    const classes = useStyles()

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
            < IconButton className={classes.customButton} onClick={() => {createLike(2,2)}}><Favorite/></IconButton>

          </Container>
        </Box>
      </>  
    )
  };
  
  