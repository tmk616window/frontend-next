import {useState, useEffect} from 'react'
import {Like} from '../../type/interfaces'
import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {destroyTool} from '../../api/tool/DestroyTool'
import Cookies from 'js-cookie'
import {getTask} from '../../api/task/GetTask'
import {createLike} from '../../api/like/CreateLike'
import {deleteLike} from '../../api/like/DeleteLike'
import {
    IconButton,
    Button
  } from '@material-ui/core';
  import Favorite from '@material-ui/icons/Favorite';
  import FavoriteBorderIcon from '@material-ui/icons/Favorite';
  import ThumbUpIcon from '@material-ui/icons/ThumbUp';
  

  interface LikesParams{
    likes : Like[]
    currentId: number
    taskId: number
    setLikes: any
  }

 const TaskLikes:React.FC<LikesParams> = ({likes, currentId, taskId, setLikes}) => {


  const destroyLike = async (id:number) => {
    deleteLike(id)
    const {data} = await getTask(taskId)
    console.log(data.task.likes)
    setLikes(data.task.likes)
    // location.reload();
  }

  const postLike = async () => {
    createLike(taskId,currentId)
    const {data} = await getTask(taskId)
    console.log(data.task.likes)
    setLikes(data.task.likes)
    // location.reload();
  }


  const likeButton = () => {
    const like:number[] = []
    likes.filter(likes => {
      if(likes.user_id === currentId) {
        like.push(likes.id)
      }
    })
    if(like.length) {
      return <Button onClick={() => {destroyLike(like[0])}}><FavoriteBorderIcon color="error" fontSize="large"/>いいね取り消し</Button>
    } else {
      return <Button onClick={() => {postLike()}}><FavoriteBorderIcon  fontSize="large"/>いいね</Button>
    }
  }



  // useEffect(() => {
  //   location.reload()
  // },[deleteLike, createLike]) 



  return (
    <>
    {likeButton()}
    </>
  )
};
  
export default TaskLikes
  