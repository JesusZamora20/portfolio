import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Skill from './skill';
import './skills.css';


function Skills() {
    return ( 
    <Box className='box-card' >
        <Typography variant='h1' id='skills-title' >Skills & education</Typography>

        <Stack direction='column' spacing={12}>
            <Stack direction='row' spacing={15} className='skill-stack-row'>
                <Skill/>
                <Skill/>
                <Skill/>
            </Stack>
        
            <Stack direction='row' spacing={15} className='skill-stack-row'>
                <Skill/>
                <Skill/>
                <Skill/>
            </Stack>
            
            <Stack direction='row' spacing={15} className='skill-stack-row'>
                <Skill/>
                <Skill/>
                <Skill/>
            </Stack>  
        </Stack>
    </Box> 
    );
}

export default Skills;