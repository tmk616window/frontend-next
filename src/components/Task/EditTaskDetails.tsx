import { useState, useEffect } from 'react';
import Image from 'next/image'
import {createTask} from '../../api/task/CreateTask'
import {createContent} from '../../api/task/content/CreateContent'
import {Task, Content} from '../../type/interfaces'
import {updateTask} from '../../api/task/UpdateTask'
import {updateContent} from '../../api/task/content/UpdateContent'
import { useRouter } from 'next/router';
import {destroyContent} from '../../api/task/content/DestroyContent'

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


interface TaskItem {
  task: Task
  setEdit: any
  id :number
  propsContents: Content[]
}



 const EditTaskDetails:React.FC<TaskItem> = ({task, setEdit, propsContents, id}) => {
  const router = useRouter();
  const [contents, setContents] = useState<any[]>(propsContents)
  const [title, setTitle] = useState<string>(task.title)
  const [desc, setDesc] = useState<string>(task.description)
  const [purl, setPurl] = useState<string>(task.purl)
  const [image, setImage] = useState<string>(task.logoImage)
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
    if(contents[id].id != null) {
      destroyContent(contents[id].id)
    } 
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
    createContent(content['title'], content['text'], task.id)
  }
}



const patchContent = () => {
  console.log(contents)
  for (const content of contents) {
    if(content.id) {
      updateContent(content['title'], content['text'], task.id, content.id)
    } else {
      createContent(content['title'], content['text'], task.id)
    }
  }
}


const patchTask = () => {
  setEdit(true)
  updateTask(title, image, purl, desc, id, task.user_id)
  patchContent()

  router.push({
    pathname:"/task",       
    query: {id : task.id} 
  });
  
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
                {contents.map((content:Content, index:number) => (
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
                            value={content.title}
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
                          value={content.text}
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