import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Edit, Delete } from "@mui/icons-material";
import API from "../../service/api";
import { useRecoilValue } from "recoil";
import usernameState from "../../atoms/username";
import Comments from "./comments/Comments";

const DetailView = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const username = useRecoilValue(usernameState);
    const navigate = useNavigate();

    const url = post.image ? post.image : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    useEffect(() => {
        const fetchData = async () => {
            const res = await API.getPostById(id);
            if(res.isSuccess){
                setPost(res.data);
            }
        };
        fetchData();
    }, []);

    const deleteBlogPost = async () => {
        const res = await API.deletePost(id);
        if(res.isSuccess) {
            navigate("/");
        }
    }

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box style={{margin: isMediumScreen ? 0 : "50px 100px"}}>
            <img src={url} 
                 alt="Blog"
                 style={{width: "100%", height: "50vh", objectFit: "cover"}} 
            />

            <Box style={{float: "right"}}>
                {
                    post.username === username &&
                    <>
                        <Link to={`/update/${id}`}>
                            <Edit style={{color: "blue", margin: "5px", padding: "5px", border: "1px solid #878787", borderRadius: "10px"}}/>
                        </Link>
                        <Delete style={{color: "red", margin: "5px", padding: "5px", border: "1px solid #878787", borderRadius: "10px"}}
                                onClick={() => {
                                    deleteBlogPost();
                                }}
                        />
                    </>
                }    
            </Box>
            
            <Typography style={{
                    fontSize: "35px",
                    fontWeight: 600,
                    textAlign: "center",
                    margin: "50px 0 10px 0",
                    wordBreak: "break-word"
                }}> 
                {post.title} 
            </Typography>
            
            <Box style={{display: "flex", justifyContent: "space-between"}}> 
                <Typography style={{color: "#878787", margin: "20px 0"}}> 
                    Author: <Box component="span" style={{fontWeight: 600}}> {post.username} </Box> 
                </Typography>
                <Typography style={{color: "#878787", margin: "20px 0"}}> {new Date(post.createdDate).toDateString()} </Typography>
            </Box>
            <Typography style={{fontSize: "20px", wordBreak: "break-word"}} > {post.description} </Typography>

            <Comments post={post}/>
        </Box>
    )
}

export default DetailView;