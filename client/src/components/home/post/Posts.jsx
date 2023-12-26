import { useEffect, useState } from "react";
import API from "../../../service/api"
import { Box, Grid, Typography } from "@mui/material";
import Post from "./Post";
import { Link, useSearchParams } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let res = await API.getAllPosts({ category: category || '' });
            if(res.isSuccess){
                setPosts(res.data);
            }
        };
        fetchData();
    }, [category]);

    return (
        <>
            {   posts &&
                posts.length > 0 ?
                posts.map(post => (
                    <Grid item lg={3} sm={6} xs={12}>
                        <Link to={`/details/${post._id}`} style={{textDecoration: "none", color: "inherit"}} >
                            <Post post={post}/>
                        </Link>
                    </Grid>
                ))
                :
                <Typography style={{color: "#878787", margin: "30px 80px", fontSize: 30, textAlign: "center"}}> Currently, There are no blogs available for {category || "Any"} category. </Typography>
            }
        </>
    )
}

export default Posts;