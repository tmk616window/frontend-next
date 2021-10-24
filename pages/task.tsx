import {useEffect, useState} from 'react'
import {getTask} from '../src/api/task/GetTask'
import {getUsers} from '../src/api/user/GetUsers'
import Link from 'next/link'
import EditTask from '../pages/task/edit'
import {Task} from '../src/type/interfaces'
import EditTaskDetails from '../src/components/Task/EditTaskDetails'
import {
    Box,
    Container,
    Grid,
    IconButton,
    CardContent,
    Card,
    Button,
    Divider
  } from '@material-ui/core';
  import Favorite from '@material-ui/icons/Favorite';
  import { useRouter } from 'next/router';
  import TaskProfile from '../src/components/Task/TaskProfile';
  import TaskDetails from '../src/components/Task/TaskDetails';
  import TaskProlangs from '../src/components/Task/TaskProlangs'
  import TaskTools from '../src/components/Task/TaskTools'
  import TaskComment from '../src/components/Task/TaskComment'
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
  export async function getServerSideProps(context:any) {
    const id = context.query.id;
    const task = (await getTask(id)).data
    const users = (await getUsers()).data


    return {
      props: {
        id: id,
        task: task,
        users: users
      }
    }
  }

  

  const Tasks = (props:any) => {

    const[edit, setEdit] = useState<boolean>(true)
    const classes = useStyles()
    const task = props.task.task  
    const users = props.users.user
    const id = props.id
    const uuid:any = {}
    for(const user of users) {
      uuid[user.id] = user.email
    }

    // const[pasks, setTasks] = useState<any>(task)
    // const handleGetPosts = async () => {
    //   const {data} = await getTask(id)
    //   console.log("ccewcew",data.tasks)
    //   setTasks(data.tasks)
    // }



      useEffect(() => {
      },[]) 
    
    return(
      <>    
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
                {edit
                  ? <TaskDetails task={task.task} setEdit={setEdit} contents={task.contents}/>
                  

                    : <EditTaskDetails  task={task} setEdit={setEdit} id={task.task.id} propsContents={task.contents}/>
                }
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs proL={task.prolangs} id={task.task.id} />
                <br/>
                <TaskTools  tls={task.tools} id={task.task.id}/>
                <br/>
                <TaskProfile/>
              </Grid>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <br/>
              <TaskComment id={task.task.id} comments={task.comments} uuid={uuid}/>
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
  

  export default Tasks
  