import {useEffect, useState} from 'react'
import {getProLangs} from '../src/api/prolang/GetProLang'
import {getTask} from '../src/api/task/GetTask'

import {
    Box,
    Container,
    Grid,
    IconButton
  } from '@material-ui/core';
  import Favorite from '@material-ui/icons/Favorite';
  import { useRouter } from 'next/router';
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
        },
  })
  

  //サーバーサイドレンダリング
  export async function getServerSideProps(context) {
    const id = context.query.id;
    const task = (await getTask(id)).data
    // const proLangs = (await getProLangs(id)).data

    return {
      props: {
        id: id,
        task: task,
        // proLangs: proLangs
      }
    }
  }

  const Task = (props:any) => {
    const classes = useStyles()
    const task = props.task.task  
    const proL = props.proLangs

      useEffect(() => {
        console.log("ccewcew",proL)
      },[]) 
    

    return(
      <>    
        <h1>検索キーワード：{task.title}</h1>
        <h1>検索キーワード：{task.title}</h1>
        <h1>検索キーワード：{task.title}</h1>
        <h1>検索キーワード：{task.title}</h1>
        <h1>検索キーワード：{task.title}</h1>
        <h1>検索キーワード：{task.title}</h1>

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
                <TaskDetails task={task} />
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
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              <h3>コメント一覧</h3>
              {/* <h3>{task}</h3> */}

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

            < IconButton className={classes.customButton} onClick={() => {createLike(2,2)}}><Favorite/></IconButton>

          </Container>
        </Box>
      </>  
    )
  };
  

  export default Task
  