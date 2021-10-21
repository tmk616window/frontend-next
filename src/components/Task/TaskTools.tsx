import {useState, useEffect} from 'react'
import {Tool} from '../../type/interfaces'
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
  import {createTool} from '../../api/tool/CreatTool'
  import DeleteIcon from '@material-ui/icons/Delete';

  interface ToolsParams{
    tls: Tool[]
    id: number
  }

  
 const TaskTools:React.FC<ToolsParams> = ({tls, id}) => {

    const [toolForm, setToolForm] = useState<string>("")
    const [tools, setTools] = useState<string[]>([])

    const deleteContent = (id:number) => {
      setTools(tools.filter((_, i) => i !== id))
    }
      
    useEffect(() => {
      console.log("dniwhnduiwhuidhwuidew", tls)
    }, [])
    const addContent = () => {
      setTools([...tools, toolForm]);
      console.log(tools)
      location.reload();
      createTool(toolForm, id)
      setToolForm("")
      };

  return (
    <>
    <Card>
      <CardContent>
      <h4>使用ツール</h4>
      {tls.map((tool:Tool, index:number) =>
            <p key={index} className="toolArticle">{tool.name}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
          )}
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
  
export default TaskTools
  