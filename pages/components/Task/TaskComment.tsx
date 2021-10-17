import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Logo from '../img/logo.png'
// import '../styles/globals.css'
// import '../../styles/globals.css'
import {
  Button,
  TextareaAutosize,
  Box
  } from '@material-ui/core';
import {createComment} from '../../../src/api/task/comment/CreateComment'

export const TaskComment = () => {
  
  const[comment, setComment] = useState<string[]>([])
  const [form, setForm] = useState<string>("")

  const addContent = () => {
    setComment([...comment, form]);
    console.log(comment)
    createComment(form)
    setForm("")
    };

  
  
    return (
        <>
          {/* {["List Item 1", "List Item 2", "List Item 3"].map(comment  => (
              <p>コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧</p>
          ))} */}

          <br/>
          <br/>
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
