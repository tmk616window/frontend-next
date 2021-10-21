import {useEffect, useState} from 'react'
import {getProLangs} from '../src/api/prolang/GetProLang'
import {getTask} from '../src/api/task/GetTask'
import {getTools} from '../src/api/tool/GetTool'
import {getComments} from '../src/api/task/comment/GetComment'
import {getContents} from '../src/api/task/content/GetComment'
import {getUsers} from '../src/api/user/GetUsers'
import {Comment} from '../src/type/interfaces'
import Link from 'next/link'
import EditTask from '../pages/task/edit'
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
    const proLangs = (await getProLangs(id)).data
    const tools = (await getTools(id)).data
    const comments = (await getComments(id)).data
    const contents = (await getContents(id)).data
    const users = (await getUsers()).data

    return {
      props: {
        id: id,
        task: task,
        proLangs: proLangs,
        tools: tools,
        comments:comments,
        contents: contents,
        users: users
      }
    }
  }

  

  const Tasks = (props:any) => {
    const[edit, setEdit] = useState<boolean>(true)

    const classes = useStyles()
    const task = props.task.task  
    const proLangs = props.proLangs.prolang
    const tools = props.tools.tools
    const comments = props.comments.comment
    const contents= props.contents.content
    const users = props.users.user
    const id = props.id
    const uuid:any = {}
    for(const user of users) {
      uuid[user.id] = user.email
    }


      useEffect(() => {
        console.log("ccewcew",uuid)

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
                {edit
                  ? <TaskDetails task={task} setEdit={setEdit} />

                    : <EditTaskDetails  task={task} setEdit={setEdit} id={id}/>
                }
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs proL={proLangs} />
                <br/>
                <TaskTools  tls={tools}/>
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
              <TaskComment comments={comments} uuid={uuid}/>
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
  