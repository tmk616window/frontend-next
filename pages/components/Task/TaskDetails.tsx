import { useState, useEffect } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {Task} from '../../../src/type/interfaces'

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
}


 const TaskDetails:React.FC<TaskItem> = ({task}) => {

  useEffect(() => {
    console.log(task)
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
              <Image alt="logo" src={Logo} height="800"/>
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
              <h3>作品URL</h3>
                <p>testtesttesttesttesttesttesttesttest</p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <h3>概要</h3>
                <p>{task.description}</p>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </CardContent>
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
          >
            編集
          </Button>
        </Box>
      </Card>
  );
};

export default TaskDetails