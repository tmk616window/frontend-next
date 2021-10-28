import {useEffect, useState} from 'react'
import {getTask} from '../src/api/task/GetTask'
import {getComments} from '../src/api/task/comment/GetComment'
import {Task} from '../src/type/interfaces'
import EditTaskDetails from '../src/components/Task/EditTaskDetails'
import {
    Box,
    Container,
    Grid,
    IconButton,
  } from '@material-ui/core';
  import Favorite from '@material-ui/icons/Favorite';
  import TaskProfile from '../src/components/Task/TaskProfile';
  import TaskDetails from '../src/components/Task/TaskDetails';
  import TaskProlangs from '../src/components/Task/TaskProlangs'
  import TaskTools from '../src/components/Task/TaskTools'
  import TaskComment from '../src/components/Task/TaskComment'
  import {createLike} from '../src/api/like/CreateLike'
  import { makeStyles } from '@material-ui/core/styles'
  import Cookies from 'js-cookie'
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
    const comments = (await getComments(id)).data

  
    return {
      props: {
        id: id,
        task: task,
        comments: comments
      }
    }
  }

  const Tasks = (props:any) => {
    const _access_token = Cookies.get("_access_token")
    const _client = Cookies.get("_client")
    const _uid = Cookies.get("_uid")  
    
    const[edit, setEdit] = useState<boolean>(true)
    const classes = useStyles()
    const pTask = props.task.task.task
    const user = props.task.task.user
    const cTask = props.task.task
    const comments = props.comments.comments
    const[task, setTask] = useState<any>(pTask)
    const[prolangs, setProlangs] = useState<any>(cTask.prolongs)



      useEffect(() => {
        console.log("user", cTask.prolongs)
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
                  ? <TaskDetails task={task} setEdit={setEdit} contents={cTask.contents} user={user}/>
                  

                    : <EditTaskDetails  task={task} setEdit={setEdit} id={pTask.id} propsContents={cTask.contents} setTask={setTask}/>
                }
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs proL={prolangs} id={pTask.id} user={user} setProlangs={setProlangs}/>
                <br/>
                <TaskTools  tls={cTask.tools} id={pTask.id} user={user}/>
                <br/>
                <TaskProfile user={cTask.user}/>
              </Grid>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <br/>
              <TaskComment id={pTask.id} comments={comments} user={user}/>
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
  