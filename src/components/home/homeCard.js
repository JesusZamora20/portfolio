import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './homeCard.css'
import React, { useState } from 'react';

function HomeCard() {
    const buttonText ="About me";
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleText = () => {
        setIsTextVisible(!isTextVisible);
    }
    return ( 
        <Box  id='home-card'>
            <Stack direction='column' spacing={4}>
                <Typography id='name' className='home-card-font' variant='h4'>Jesús Bermúdez Zamora</Typography>
                <Typography id='title' className='home-card-font' variant='h1'>Software Developer</Typography>
            </Stack>

            <Stack direction='row' spacing={4}>
                <Button disableElevation  
                        id="aboutMeButton"
                        onClick={toggleText}>
                    {buttonText}
                </Button>

                <Button disableElevation  id="github-button" target="_blank"  rel="noreferrer"
                href='https://github.com/JesusZamora20'>
                    <GitHubIcon id="github-icon"/>
                </Button>

                <Button disableElevation  id="linkedin-button" target="_blank" rel="noreferrer"
                href='https://www.linkedin.com/in/jes%C3%BAs-david-berm%C3%BAdez-zamora-070a4418b/'>
                    <LinkedInIcon id="linkedin-icon"/>
                </Button>
            </Stack>


            { isTextVisible && <Box id="about-me-box">
                <Typography id="about-me-text" variant="">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </Typography>
            </Box>}

        </Box> 
    );
}

export default HomeCard;