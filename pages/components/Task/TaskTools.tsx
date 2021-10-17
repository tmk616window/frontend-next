import {useState} from 'react'
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    IconButton,
    Grid
  } from '@material-ui/core';
  import {createTool} from '../../../src/api/tool/CreatTool'
  import DeleteIcon from '@material-ui/icons/Delete';

  

  export const TaskTools = () => {

    const [toolForm, setToolForm] = useState<string>("")
    const [tools, setTools] = useState<string[]>([])

    const deleteContent = (id:number) => {
      setTools(tools.filter((_, i) => i !== id))
    }
      
    const addContent = () => {
      setTools([...tools, toolForm]);
      console.log(tools)
      createTool(toolForm)
      setToolForm("")
      };

  return (
    <>
    <Card>
      <CardContent>
      <h4>使用ツール</h4>
      {tools.map((proLang:string, index:number) => (
         <p className="toolArticle" key={index}>{proLang}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
     ))} 
     </CardContent>
      <Divider />
      <Divider />
      <CardActions>
          <input value={toolForm} onChange={(e) => setToolForm(e.target.value)}/>
          <Button onClick={() =>addContent()}>追加</Button>
      </CardActions>
      
    </Card>
    </>
  )
};
  
  
  