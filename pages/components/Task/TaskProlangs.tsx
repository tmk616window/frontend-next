import {useState, useEffect} from 'react'
import {getProLangs} from '../../../src/api/prolang/GetProLang'

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
  
  export async function getServerSideProps(context:any) {
    const id = context.query.id;
    const proLangs = (await getProLangs(id)).data
    return {
      props: {
        proLangs: proLangs,
      }
    }
  }




 const TaskProlangs = (props:any) => {
  const proLang = props.proLangs
  useEffect(() => {
    console.log(proLang)
  },[]) 
  


      const [form, setForm] = useState<string>("")
      const [proLangs, setProLangs] = useState<string[]>([])
    
      const deleteContent = (id:number) => {
        const dTask = proLangs.filter((_, i) => i !== id)

        setProLangs(dTask)
      }
        
      const addContent = () => {
        setProLangs([...proLangs, form]);
        console.log(proLangs)
        createProLang(form)
        setForm("")
        };

  

    return (
    <>
    <Card>
      <CardContent>
      <h4>プログラミング言語</h4>  
       {proLangs.map((proLang:string, index:number) => (
         
          <p className="article" key={index}>{proLang}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
          
      ))} 

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