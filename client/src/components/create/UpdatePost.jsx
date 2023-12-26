import { Box, Button, FormControl, InputBase, TextareaAutosize, useMediaQuery, useTheme } from "@mui/material";
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import usernameState from "../../atoms/username";
import API from "../../service/api";

const intialPost = {
    title: '',
    description: '',
    image: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const UpdatePost = () => {
    const [post, setPost] = useState(intialPost);
    const [file, setFile] = useState('');
    const location = useLocation();
    const username = useRecoilValue(usernameState);
    const navigate = useNavigate();
    const url = post.image ? post.image : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await API.getPostById(id);
            if(res.isSuccess){
                setPost(res.data);
            }   
        };
        fetchData();
    }, []);

    useEffect(() => {
        const getImage = async () => {
            if(file) {
                let data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const res = await API.uploadFile(data);
                post.image = res.data;
            }
        }
        getImage();
        post.categories = location.search?.split("=")[1] || "All";
        post.username = username;
    }, [file]);

    const onInputChange = (element) => {
        setPost({...post, [element.target.name]: element.target.value})
    };

    const updateBlogPost = async () => {
        const res = await API.updatePost(post);
        if(res.isSuccess){
            navigate(`/details/${id}`)
        }
    };

    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box style={{margin: isMediumScreen ? 0 : "50px 100px"}}> 
            <img src={url} alt="CreateBlogImage" style={{
                    width: "100%",
                    height: "50vh",
                    objectFit: 'cover'
                }}/>    
            <FormControl style={{ 
                    margin: "10px",  
                    display: "flex",
                    flexDirection: "row"
                }}>
                <label htmlFor="fileInput">
                    <AddPhotoAlternateRoundedIcon style={{ fontSize: 35, color: "#878787" }}/>
                </label>
                <input 
                    type="file" 
                    id="fileInput" 
                    style={{
                        display: "none"
                    }}
                    name="image"
                    onChange={(element) => {
                        setFile(element.target.files[0]);
                    }}
                />
                <InputBase 
                    placeholder="Title" 
                    style={{
                        flex: 1,
                        margin: "0 30px",
                        fontSize: "25px"
                    }}
                    name="title"
                    value={post.title}
                    onChange={(element) => {
                        onInputChange(element);    
                    }}
                />
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        updateBlogPost();
                    }}
                    >
                    Update
                </Button>
            </FormControl>
            <TextareaAutosize
                minRows={10}
                placeholder="Write Your Blog Here"
                style={{
                    width: "100%",
                    fontSize: "15px",
                    border: "none",
                    outline: "none"
                }}
                name="description"
                value={post.description}
                onChange={(element) => {
                    onInputChange(element);
                }}
            />
        </Box>
    )
}

export default UpdatePost; 