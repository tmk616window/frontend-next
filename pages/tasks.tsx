import React, { useEffect, useState } from "react";
import {getTasks} from '../src/api/task/GetTasks'
import Image from 'next/image'
import Logo from '../img/logo.png'
import {Task} from '../src/type/interfaces/task'

export const TaskList = () => {
  
  const[tasks, setTasks] = useState<Task[]>()

  
  const handleGetTasks = async () => {
    try {
      const res = await getTasks()
      console.log(res.data.tasks)

      if (res?.status === 200) {
        const Tasks = res.data.tasks
        console.log("dem",res.data.tasks)
        console.log("tasks", Tasks)
        setTasks(Tasks)
        // setTasks((newTasks) => Tasks)
    
      } else {
        
      }
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    handleGetTasks()
  },[])

  

  let listItem = {
    margin: "10px 20px 20px 20px",
  }

  let taslList = {
    // backgroundColor: "#99FFFF	",
  }
  console.log("dddmdopekmdopew", tasks)
    return (
      <div style={taslList}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              {/* <>{tasks}</> */}
        <ul className="list-group">
          {["List Item 1", "List Item 2", "List Item 3"].map((listitem ,index)=> (
            <li key={index} className="list-group-item list-group-item-primary list-item" >
              <div className="item-image">
                <Image src={Logo} alt="..." width = "250" height="250" className="logo-image" />
              </div>
              <div className="item-content">
                <h1>{listitem}</h1>
                <p>ポートフォリオ概要</p>
                <p className="description">dkopkdomxklんmkおxsんwこcんwkpmんqkpmwkpqmdpwqmpwんmqpdmんwqkpmpおwqもpwqもpもpqwdmんどpqpekwopddejwopjdeopjopdew</p>
                <p>使用技術</p>
                <div className="langArticle">
                  
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default TaskList;
