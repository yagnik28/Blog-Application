
import { Box, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Contact = () => {
    return (
        <Box>
        
            <Box style={{
                backgroundImage: `url(http://mrtaba.ir/image/bg2.jpg)`,
                width: "100%",
                height: "50vh",
                backgroundPosition: "left 0px top -100px",
                backgroundSize: "cover" 
            }}/>

            <Box style={{padding: "20px"}}>
                
                <Typography variant="h3" style={{marginTop: "30px"}}> Getting in touch is easy! </Typography>    
                
                <Typography variant="h5" style={{marginTop: "50px", color: "#878787"}}>
                    
                    Reach out to me on
                    
                    <Link href="https://www.instagram.com/Yagnik_Dhameliya_281/" color="inherit" target="_blank" style={{padding: "10px"}}>
                        <Instagram/>
                    </Link>
                    
                    or send me an Email 
                    
                    <Link href="mailto:dhameliyayagnik28@gmail.com?Subject=This is a subject" target="_blank" color="inherit" style={{padding: "10px"}}>
                        <Email/>
                    </Link>
                </Typography>
            
            </Box>
        
        </Box>
    );
}

export default Contact;