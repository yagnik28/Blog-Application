import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const About = () => {

    return (
        <Box>
            <Box style={{
                backgroundImage: `url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg)`,
                width: "100%",
                height: "50vh",
                backgroundPosition: "left 0px bottom 0px",
                backgroundSize: "cover"
            }}/>
            <Box style={{padding: "20px"}}>
                
                <Typography variant="h3" style={{marginTop: "30px"}}> Yagnik Dhameliya </Typography>
                
                <Typography variant="h5" style={{marginTop: "30px", color: "#878787"}}> 
                    I'm a college student from NIT Surat pursuing B.Tech in Computer Science and Enginnering. 
                    <br/>
                    I am interested Competitive Programming and Full Stack Development.
                    <br/>
                    If you are interested, you can view my profiles and projects.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/yagnik28" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                
                <Typography variant="h5" style={{marginTop: "30px", color: "#878787"}}>
                    
                    Reach out to me on
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/Yagnik_Dhameliya_281/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                    
                    or send me an Email 
                    
                    <Link href="mailto:dhameliyayagnik28@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                
                </Typography>
            
            </Box>
        </Box>
    )
}

export default About;
