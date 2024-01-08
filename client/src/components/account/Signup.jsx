import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../service/api"

const ImageUrl = "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const signUpIntialValue = {
    name: '',
    username: '',
    password: ''
}

function Signup({ isUserAuthenticated }){
    const [signup, setSignup] = useState(signUpIntialValue);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onInputChange = (element) => {
        setSignup({...signup, [element.target.name]: element.target.value})
    }

    const signupUser = async () => {
        const res = await API.userSignup(signup);
        if(res.isSuccess){
            setError('');
            setSignup(signUpIntialValue);
            isUserAuthenticated(true)
            navigate("/login");
        }
        else{
            setError("Something went wrong! Please try again")
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
                        label="Name" 
                        name="name"
                        style={{
                            width: "100%"
                        }}
                        onChange={(element) => {
                            onInputChange(element);
                        }}>
                    </TextField>
                    <TextField 
                        variant="outlined" 
                        label="Username" 
                        name="username"
                        style={{
                            width: "100%",
                            marginTop: "20px"
                        }}
                        onChange={(element) => {
                            onInputChange(element);
                        }}>   
                    </TextField>
                    <TextField 
                        variant="outlined" 
                        label="Password"
                        type = "password"
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
                    <Button variant="contained" style={{
                        textTransform: "none",
                        backgroundColor: "#FB641B",
                        color: "#FFF",
                        height: "48px",
                        borderRadius: "2px"
                        }}
                        onClick={() => {
                            signupUser();
                        }}> 
                        Signup 
                    </Button>
                    <Typography style={{
                        textAlign: "center",
                        margin: "10px",
                        color: "#878787",
                        fontSize: "14px"
                        }}> 
                        OR 
                    </Typography>
                    <Button variant="text" style={{
                        textTransform: "none",
                        backgroundColor: "#fff",
                        color: "#2874f0",
                        height: "48px",
                        borderRadius: "2px",
                        boxShadow: "0 2px 5px 0 rgb(0 0 0/ 0.4)"
                        }}
                        onClick={() => {
                            navigate("/login");
                        }}> 
                        Already have an account 
                    </Button>
                </Box>
                
            </Box>

        </Box>
        
    </div>
}

export default Signup;