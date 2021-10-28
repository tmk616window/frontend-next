import { useState, useEffect } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {Task, Content, User} from '../../type/interfaces'
import {displayImage} from '../../api/common/DisplayImage'
import Cookies from 'js-cookie'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

interface TaskItem {
  task: Task
  setEdit: any
  contents: Content[]
  user :User
}


 const TaskDetails:React.FC<TaskItem> = ({task, setEdit, contents, user}) => {

  const _access_token = Cookies.get("_access_token")
  const _client = Cookies.get("_client")
  const _uid = Cookies.get("_uid")


  useEffect(() => {
    console.log("task.logoImage?.url", _uid)
  }, [])
  
  const patchButton = () => {
    if (user.email === _uid) {
      return (
        <>
        <Button
          color="secondary"
          variant="contained"
          onClick={()=>{setEdit(false)}}
        >
          編集
        </Button>
      </>
      );
    } 
  };



  return (
      <Card>
        <CardHeader
          title={task.title}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              md={12}
              xs={12}
            >
              {/* <img alt="logo" src={task.logoImage?.url} height="70%" width="100%"/> */}
              <img alt="logo" src={displayImage(`/localhost/${task.logoImage?.url}`)} height="70%" width="100%"/>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >

            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <h3>ポートフォリオURL</h3>
                <p>{task.purl}</p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <h3>ポートフォリオ概要</h3>
                <p>{task.description}</p>
            </Grid>
          </Grid>
          <Grid
              item
              md={12}
              xs={12}
            >
            {contents.map((content:Content, index:number) =>
                  <div key={index}>
                    <Card>
                    <CardContent>
                    <h3>{content.title}</h3>
                    <p >{content.text}</p>
                      </CardContent>
                    </Card>
                    <br/>
                  </div>
                  )}
          </Grid>
          <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                {patchButton()}
              </Box>

          <Grid>
          </Grid>
        </CardContent>
      </Card>
  );
};

export default TaskDetails