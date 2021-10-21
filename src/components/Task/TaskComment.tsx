import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Logo from '../img/logo.png'
import Link from 'next/link'
import {
  Button,
  TextareaAutosize,
  Box,
  Card,
  CardContent,
  Grid
  } from '@material-ui/core';
import {createComment} from '../../api/task/comment/CreateComment'
import {Comment} from '../../type/interfaces'

interface CommentParam{
  comments: Comment[]
  uuid: any
}

const TaskComment:React.FC<CommentParam> = ({comments, uuid}) => {
  
  const[comment, setComment] = useState<string[]>([])
  const [form, setForm] = useState<string>("")

  const addContent = () => {
    setComment([...comment, form]);
    console.log(comment)
    createComment(form)
    setForm("")
    location.reload();
    };

  
  
    return (
        <>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <br/>
              <h3>コメント一覧</h3>
              
              {comments.map((comment:Comment, index:number) =>
                <div key={index}>
                  <Card>
                  <CardContent>
                  <p >{comment.text}</p>
                  <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                  }}
                  >
                    ユーザー：<Link href={{ pathname: '/profile', query: { id: comment.user_id } }}>{uuid[comment.user_id]}</Link>
                  </Box>

                    </CardContent>
                  </Card>
                  <br/>
                </div>
                )}
            </Grid>
            <h3>コメント</h3>
          <TextareaAutosize
            name="コンテンツ"
              minRows={7}
              value={form}
              style={{ width: "100%" }}
              onChange={(e) => setForm(e.target.value)}
          />
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
            onClick={addContent}
          >
            投稿
          </Button>
        </Box>

        </>
    );
  }

  export default TaskComment