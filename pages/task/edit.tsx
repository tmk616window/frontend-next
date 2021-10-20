import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import NewTaskDetails from '../components/Task/NewTaskDetails';
  import TaskProlangs from '../components/Task/TaskProlangs'
  import TaskTools from '../components/Task/TaskTools'
  import {Task} from '../../src/type/interfaces'

  interface TaskItem {
    task: Task
    setEdit: any
  }
  
  
  

  const EditTask:React.FC<TaskItem> = ({task, setEdit}) => {

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
              </Grid>
            </Grid>

          </Container>
        </Box>
      </>  
    )
  };
  
export default EditTask
  