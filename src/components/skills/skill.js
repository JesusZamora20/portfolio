import { Box, Typography } from '@mui/material';
import React from 'react';
import './skill.css'

function Skill() {
    return ( 
    <Box className='skill-box'>
        <Typography variant='h4' className='skill-card-text'>Web development with JavaScript</Typography>
        <Typography className='skill-card-text'>Cartagena, Colombia</Typography>
        <Typography className='skill-card-text'>Universidad Tecnologica de Bolivar</Typography>
    </Box>
    );
}

export default Skill;