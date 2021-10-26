import { useState, useEffect } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {Task, Content} from '../../type/interfaces'
import {displayImage} from '../../api/common/DisplayImage'

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
}


 const TaskDetails:React.FC<TaskItem> = ({task, setEdit, contents}) => {

  useEffect(() => {
    console.log("task.logoImage?.url", task.logoImage)
  }, [])
  

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
              <img alt="logo" src={displayImage(`http://${task.logoImage?.url}`)} height="70%" width="100%"/>
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
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={()=>{setEdit(false)}}
                >
                  編集
                </Button>
              </Box>

          <Grid>
          </Grid>
        </CardContent>
      </Card>
  );
};

export default TaskDetails