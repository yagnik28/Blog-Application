import { Box, Button, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import usernameState from "../../../atoms/username";
import API from "../../../service/api";
import Comment from "./Comment";

const intialVal = {
    username: '',
    postId: '',
    comments: '',
    date: new Date()
}

const url = "https://static.thenounproject.com/png/12017-200.png";

const Comments = ({ post }) => {
    const [comment, setComment] = useState(intialVal);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
    const username = useRecoilValue(usernameState);

    useEffect(() => {
        const getData = async () => {
            const res = await API.getAllComments(post._id);
            if(res.isSuccess) {
                setComments(res.data);
            }
        };
        getData();
    }, [post, toggle]);

    const onInputChange = (element) => {
        setComment({
            ...comment,
            username: username,
            postId: post._id, 
            comments: element.target.value
        })
    };
    
    const addComment = async () => {
        const res = await API.newComment(comment);
        if(res.isSuccess){
            setComment(intialVal);
        }
        setToggle(prevState => !prevState)
    }

    return (
        <Box>
            <Box style={{   
                    marginTop: "100px",
                    display: "flex"
            }}>
                <img src={url} alt="DP" 
                     style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%"
                     }}
                />
                <TextareaAutosize
                    minRows={5}
                    placeholder="Comment Here..."
                    style={{
                        width: "100%",
                        height: "100px",
                        margin: "0 20px"   
                    }}
                    value={comment.comments}
                    onChange={(element) => {
                        onInputChange(element);
                    }}
                />
                <Button 
                    variant="contained" 
                    size="medium" 
                    style={{height: 40}}
                    onClick={() => {
                        addComment();
                    }}>
                    Post
                </Button>
            </Box>
            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle}/>  
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;