import {useState, useEffect} from 'react'
import {Tool, User} from '../../type/interfaces'
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {destroyTool} from '../../api/tool/DestroyTool'
import Cookies from 'js-cookie'

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
  }

  
 const TaskTools:React.FC<ToolsParams> = ({tls, id, user}) => {

    const [toolForm, setToolForm] = useState<string>("")
    const [tools, setTools] = useState<string[]>([])
    const _uid = Cookies.get("_uid")


    const deleteContent = (id:number) => {
      if(tls[id].id) {
        destroyTool(tls[id].id)
      }
      location.reload();
      // setTools(tools.filter((_, i) => i !== id))
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
  