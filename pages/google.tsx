import {getTask} from '../src/api/task/GetTask'
import {useEffect} from 'react'
//サーバーサイドレンダリング
export async function getServerSideProps(context) {
    const id = context.query.id;  
    const t = (await getTask(id)).data
    return {
      props: {
        id: id,
        task: t
      }
    }
  }
  
  export default function Result(props) {
  
    // useEffect(() => {
    //     console.log(props.task.task.id)

    // }, [])
    //Googleブックの情報を取得  
    return (
      <div style={{marginLeft: "50px"}}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        <h1>検索キーワード：{props.task.task.title}</h1>

      </div>
    )
  }
  