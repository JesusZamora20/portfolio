import { Box, Typography } from '@mui/material';
import React from 'react';
import './skill.css'

function Skill({cardTitle, description, details}) {

    return ( 
    <Box className='skill-box'>
        <Typography variant='h4' className='skill-card-text-title'>{cardTitle}</Typography>
        <Typography variant='h5' className='skill-card-text-description'>{description}</Typography>
        <Typography variant='h6' className='skill-card-text-details'>{details}</Typography>
    </Box>
    );
}

export default Skill;