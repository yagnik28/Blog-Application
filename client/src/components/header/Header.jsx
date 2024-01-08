import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar style={{
                background: "#ffffff",
                color: "#000"
            }}>
            <Toolbar style={{
                justifyContent: "flex-end",
                backgroundColor: "#EFEFE1",
                fontWeight: 600
                }}>
                <div style={{
                        fontSize: "30px",
                        color: "#000",
                        alignItems: "center",
                        flex: 1,
                        marginLeft: "550px"
                    }}> 
                    Share Your Thoughts 
                </div>
                <Link to={"/"} 
                    style={{
                        marginRight: "20px",
                        fontSize: 20,
                        color: "inherit",
                        textDecoration: "none"
                    }}> 
                    Home 
                </Link>
                <Link to={"/about"} 
                    style={{
                        marginRight: "20px",
                        fontSize: 20,
                        color: "inherit",
                        textDecoration: "none"
                    }}> 
                    About 
                </Link>
                <Link to={"/contact"} 
                    style={{
                        marginRight: "20px",
                        fontSize: 20,
                        color: "inherit",
                        textDecoration: "none"
                    }}> 
                    Contact
                </Link>
                <Link to={"/login"} 
                    onClick={() => {
                        window.location.reload();
                    }}
                    style={{
                        marginRight: "20px",
                        fontSize: 20,
                        color: "inherit",
                        textDecoration: "none"
                    }}> 
                    Logout
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;