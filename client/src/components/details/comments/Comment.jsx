import { Box, Typography, useRadioGroup } from "@mui/material"; 
import { Delete } from "@mui/icons-material"
import { useRecoilValue, useSetRecoilState } from "recoil";
import usernameState from "../../../atoms/username";
import API from "../../../service/api";

const Comment = ({ comment, setToggle }) => {
    const username = useRecoilValue(usernameState);
    
    const removeComment = async () => {
        const res = await API.deleteComment(comment._id);
        if(res.isSuccess) {
            setToggle(prevState => !prevState);
        }
    };

    return (
        <Box style={{
                marginTop: "30px",
                backgroundColor: "#F5F5F5",
                padding: "10px"
            }}> 
            <Box style={{
                    display: "flex",
                    marginBottom: "10px"
                }}>
                <Typography style={{
                        fontWeight: 600,
                        fontSize: "18px",
                        marginRight: "20px"
                    }}> 
                    {comment.username} 
                </Typography>
                <Typography style={{
                        color: "#878787",
                        fontSize: "14px"
                    }}> 
                    {new Date(comment.date).toDateString()} 
                </Typography>
                {   
                    username === comment.username 
                        && 
                    <Delete 
                        style={{marginLeft: "auto"}}
                        onClick={() => {
                            removeComment();
                        }}
                    />
                }
            </Box>
            <Box>
                <Typography> {comment.comments} </Typography>
            </Box>
        </Box>
    )
};

export default Comment;