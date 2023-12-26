import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import API from "../../service/api"
import nameState from "../../atoms/name"
import usernameState from "../../atoms/username"
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const ImageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const loginInitialValue = {
    username: '',
    password: ''
}

function Login({ isUserAuthenticated }){
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState('');
    const setName = useSetRecoilState(nameState);
    const setUsername = useSetRecoilState(usernameState);
    const navigate = useNavigate();

    const onInputChange = (element) => {
        setLogin({...login, [element.target.name]: element.target.value})
    }

    const loginUser = async () => {
        const res = await API.userLogin(login);
        if(res.isSuccess){
            setError('');            
            localStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`)
            localStorage.setItem("refreshToken", `Bearer ${res.data.refreshToken}`)
            setName(res.data.name);
            setUsername(res.data.username);
            isUserAuthenticated(true)
            navigate("/");
        }   
        else{
            setError("Something went wrong! Please try again");
        }
    }

    return <div style={{
        padding: "50px 0 0 0"
    }}>

        <Box style={{
            width: 400,
            display: "flex",
            margin: "auto",
            boxShadow: "5px 2px 5px 2px rgb(0 0 0/0.6)"
        }}>
            
            <Box>
                <img src={ImageUrl} alt="login" style={{
                    width: 120,
                    margin: "auto",
                    display: "flex",
                    paddingTop: "50px"
                }} /> 

                <Box style={{
                    textAlign: "center",
                    marginTop: "20px",
                    padding: "0 20px 0 20px"
                }}>
                    <TextField 
                        variant="outlined" 
                        label="Username"
                        name="username" 
                        style={{
                            width: "100%"
                        }}
                        onChange={(element) => {
                            onInputChange(element);
                        }}>
                    </TextField>
                    <TextField 
                        variant="outlined" 
                        label="Password" 
                        name="password"
                        style={{
                        width: "100%",
                        marginTop: "20px"
                        }}
                        onChange={(element) => {
                            onInputChange(element);
                        }}>
                    </TextField>
                </Box>

                { error && <Typography style={{
                                fontSize: "13px",
                                color: "#ff6161",
                                paddingTop: "15px",
                                paddingLeft: "20px",
                                fonWeight: 600
                            }}> {error} </Typography>}
                
                <Box style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    margin: "20px 0 20px 0",
                    padding: "0 20px 0 20px"
                }}>
                    <Button 
                        variant="contained" 
                        style={{
                            textTransform: "none",
                            backgroundColor: "#FB641B",
                            color: "#FFF",
                            height: "48px",
                            borderRadius: "2px"
                        }}
                        onClick={() => {
                            loginUser();
                        }}> 
                        Login 
                    </Button>
                    <Typography 
                        style={{
                            textAlign: "center",
                            margin: "10px",
                            color: "#878787",
                            fontSize: "14px"
                        }}> 
                        OR 
                    </Typography>
                    <Button 
                        variant="text" 
                            style={{
                            textTransform: "none",
                            backgroundColor: "#fff",
                            color: "#2874f0",
                            height: "48px",
                            borderRadius: "2px",
                            boxShadow: "0 2px 5px 0 rgb(0 0 0/ 0.4)"
                        }}
                        onClick={() => {
                            navigate("/signup");
                        }}> 
                        Create an account 
                    </Button>
                </Box>
                
            </Box>

        </Box>
        
    </div>
}

export default Login;