import { useState } from 'react';
import Image from 'next/image'
import {createTask} from '../../../src/api/task/CreateTask'
import {createContent} from '../../../src/api/task/content/CreateContent'
import {Task} from '../../../src/type/interfaces'
import {updateTask} from '../../../src/api/task/UpdateTask'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextareaAutosize,
  TextField
} from '@material-ui/core';


type content = {
    title :string,
    text: string
}

interface TaskItem {
  task: Task
  setEdit: any
  id :number
}



 const EditTaskDetails:React.FC<TaskItem> = ({task, setEdit, id}) => {
  const [contents, setContents] = useState<content[]>([{title:"", text:""}])
  const [title, setTitle] = useState<string>(task.title)
  const [desc, setDesc] = useState<string>(task.description)
  const [purl, setPurl] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const addContent = () => {
    setContents([...contents, {title:"", text:""}]);
    console.log(contents)
    };

    const changeHandle = (key: string, value: string, index:number) => {
      const _contents = [...contents]
      _contents[index] = {...contents[index], [key]: value}
      setContents(_contents)
    }
  

  const deleteContent = (id:number) => {
    setContents(contents.filter((_, i) => i !== id))
  }

  const [values, setValues] = useState({
    email: 'demo@devias.io',
    country: 'USA'
  });


const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };



  const handleImageChange = (event: any) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl)
 }

 const postContent = () => {
  for (const content of contents) {
    createContent(content['title'], content['text'])
  }
}

const patchTask = () => {
  setEdit(true)
  updateTask(title, image, purl, desc, id, task.user_id)
}


  return (
      <Card>
        <Divider />
        <CardContent>
        <Grid
            item
            md={12}
            xs={12}
        >
        <TextField
            fullWidth
            label="タイトル"
            name="タイトル"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
        />
        </Grid>
        <br/>
          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              md={12}
              xs={12}
            >

              <Button
                  component="label"
                >
                ロゴ画像を貼ってください
                  <input type="file" accept="image/*" onChange={handleImageChange}/>
              </Button>
              {/* <Image alt="admin" src={image} height="450" width="100%"/> */}
              {/* <Image src={image} height="800"/> */}
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
            >
              <p>作品URL</p>
              <TextField
                fullWidth
                label="作品URL"
                name="作品URL"
                required
                value={purl}
                onChange={(e) => setPurl(e.target.value)}
                variant="outlined"
              />

            </Grid>

            <Grid
              item
              md={12}
              xs={12}
            >
              <p>概要</p>
              <TextareaAutosize
                minRows={7}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{ width: "100%" }}
              />
            </Grid>
    
                <Button onClick={addContent}>追加</Button>
                {contents.map((c:{title:string, text:string}, index:number) => (
                    <Grid
                        key={index}
                        item
                        md={12}
                        xs={12}
                    >
                        <Button onClick={()=>deleteContent(index)}>削除</Button>
                        <TextField
                            fullWidth
                            label="サブタイトル"
                            name="サブタイトル"
                            required
                            onChange={(event) => {
                              　      changeHandle("title", event.target.value, index);
                              　    }}
                            value={c.title}
                            variant="outlined"
                            />
                        <br/>
                        <br/>

                        <TextareaAutosize
                        // label="コンテンツ"
                        name="コンテンツ"
                        onChange={(event) => {
                          　      changeHandle("text", event.target.value, index);
                          　    }}
                          value={c.text}
                          minRows={7}
                          style={{ width: "100%" }}
                        />
                    </Grid>
                ))}
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
            onClick={() =>{patchTask()}}
          >
            保存
          </Button>

        </Box>
      </Card>
  );
};

export default EditTaskDetails