import {useState, useEffect} from 'react'
import {getProLangs} from '../../../src/api/prolang/GetProLang'
import {ProLang} from '../../../src/type/interfaces'

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
    TextField,
    IconButton,
    Grid
  } from '@material-ui/core';
  import {createProLang} from '../../../src/api/prolang/CreateProLang'
  import DeleteIcon from '@material-ui/icons/Delete';
  
  interface ProLangParam{
    proL: ProLang[]
  }


 const TaskProlangs:React.FC<ProLangParam> = ({proL}) => {  
      const [form, setForm] = useState<string>("")
      const [proLangs, setProLangs] = useState<string[]>([])
    
      const deleteContent = (id:number) => {
        const dTask = proL.filter((_, i) => i !== id)
        console.log(dTask)
      }
        
      const addContent = () => {
        setProLangs([...proLangs, form]);
        console.log(proLangs)
        createProLang(form)
        location.reload();
        setForm("")
        };

  

    return (
    <>
    <Card>
      <CardContent>
      <h4>プログラミング言語</h4>
        {proL.map((p:ProLang, index:number) =>
            <p key={index} className="article">{p.lange}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
          )}
      </CardContent>
      <Divider />
        <CardActions>
            <input value={form} onChange={(e) => setForm(e.target.value)}/>
            <Button onClick={() =>addContent()}>追加</Button>
        </CardActions>

    </Card>
    </>
  )
};
  
  
export default TaskProlangs