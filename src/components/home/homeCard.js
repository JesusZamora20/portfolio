import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './homeCard.css'
import React from 'react';

function HomeCard() {
    return ( 
        <Box className='home-card'>
            <Stack direction='column' spacing={4}>
                <Typography id='name' className='home-card-font' variant='h4'>Jesús Bermúdez Zamora</Typography>
                <Typography id='title' className='home-card-font' variant='h1'>Software Developer</Typography>
            </Stack>

            <Stack direction='row' spacing={4}>
                <Button disableElevation startIcon={<AddRoundedIcon/>} id="aboutMeButton">
                    About me
                </Button>

                <Button disableElevation  id="github-button">
                    <GitHubIcon id="github-icon"/>
                </Button>

                <Button disableElevation  id="linkedin-button">
                    <LinkedInIcon id="linkedin-icon"/>
                </Button>
            </Stack>
            
        </Box> 
    );
}

export default HomeCard;