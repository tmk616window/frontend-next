import {useState, useEffect} from 'react'
import {Tool, User} from '../../type/interfaces'
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {destroyTool} from '../../api/tool/DestroyTool'
import Cookies from 'js-cookie'
import {getTask} from '../../api/task/GetTask'
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
    user: User
    setPtools: any
  }

  
 const TaskTools:React.FC<ToolsParams> = ({tls, id, user, setPtools}) => {

    const [toolForm, setToolForm] = useState<string>("")
    const [tools, setTools] = useState<string[]>([])
    const _uid = Cookies.get("_uid")


    const deleteContent = async (id:number) => {
      

      const {data} = await destroyTool(tls[id].id)
      console.log("destroyProLangdestroyProLangdestroyProLang", data.tool.task_id)
      // location.reload();
      const tProlangs = (await getTask(data.tool.task_id)).data
      console.log("aaaaaaaaaaaa",tProlangs.task.tools)
      setPtools(tProlangs.task.tools)
      location.reload();

      // location.reload();
    }
      
    useEffect(() => {
    }, [])
    const addContent = async () => {
      setTools([...tools, toolForm]);
      console.log(tools)
      createTool(toolForm, id)
      const tTools = (await getTask(id)).data
      console.log("aaaaaaaaaaaa",tTools.task.tools)
      setPtools(tTools.task.tools)
      setToolForm("")
      location.reload();
      };

      const atools = () => {
        if (user.email === _uid) {
          return (
            <>
              {tls.map((tool:Tool, index:number) =>
                    <p key={index} className="toolArticle">{tool.name}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
                  )}
              <Divider />
              <CardActions>
                  <input value={toolForm} onChange={(e) => setToolForm(e.target.value)}/>
                  <Button onClick={() =>addContent()}>追加</Button>
              </CardActions>
          </>
          );
        } else {
          return (
            <>
              {tls.map((tool:Tool, index:number) =>
                    <p key={index} className="toolArticle">{tool.name}</p>
                  )}
          </>
          );
        }
      };              




  return (
    <>
    <Card>
      <CardContent>
      <h4>使用ツール</h4>
      {atools()}
     </CardContent>      
    </Card>
    </>
  )
};
  
export default TaskTools
  