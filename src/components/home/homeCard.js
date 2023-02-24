import { Box, Typography, Button, Stack } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './homeCard.css'
import React from 'react';

function HomeCard() {
    return ( 
        <Box className='home-card'>
            <Stack direction='column' spacing={4}>
                <Typography id='title' className='home-card-font' variant='h1'>Software Developer</Typography>
                <Typography id='name' className='home-card-font' variant='h4'>Jesús Bermúdez Zamora</Typography>
            </Stack>

            <Button disableElevation startIcon={<AddRoundedIcon/>} id="aboutMeButton">
                About me
            </Button>
        </Box> 
    );
}

export default HomeCard;