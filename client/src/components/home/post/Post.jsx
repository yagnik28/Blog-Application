import { Box, Typography } from "@mui/material";
import addElipsis from "../../../common/addElipsis"

const Post = ({ post }) => {
    return (
        <>
            <Box style={{
                    border: "1px solid #d3cede",
                    borderRadius: "10px",
                    mergin: "10px",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "7px"
                }}>
                <img src={post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"} 
                     alt="Blog"
                     style={{
                        width: "100%",
                        height: 150,
                        borderRadius: "10px 10px 0 0",
                        objectFit: 'cover'
                     }} 
                />
                <Typography style={{color: "#878787", fintSize: "14px"}}> {post.categories}</Typography>
                <Typography style={{color: "#878787", fontSize: "14px"}}> Author: {post.username}</Typography>
                <Typography style={{fontSize: "18px", fontWeight: 600}} >{addElipsis(post.title, 20)}</Typography>
                <Typography style={{fontSize: "16px", wordBreak: "break-word"}}>{addElipsis(post.description, 120)}</Typography>
            </Box>
        </>
    )
}

export default Post;