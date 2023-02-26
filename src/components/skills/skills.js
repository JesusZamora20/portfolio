import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Skill from './skill';
import './skills.css';


function Skills() {
    return ( 
    <Box className='box-card' >
        <Typography variant='h1' id='skills-title' >Skills & education</Typography>

        <Stack direction='column' spacing={2}>
            <Stack direction='row' spacing={2} className='skill-stack-row'>
                <Skill cardTitle='Mecathronic Engineering' 
                description={`Universidad Tecnologica de Bolivar. Cartagena, Colombia. 2018-2023`}
                />

                <Skill cardTitle='JavaScript' 
                description='Software and web development with JavaScript'
                />

                <Skill cardTitle='HTML & CSS' 
                description='Web styling and responsive design'
                />
                
            </Stack>
        
            <Stack direction='row' spacing={2} className='skill-stack-row'>

                <Skill cardTitle='Git & GitHub' 
                description='Git is a version control system designed to handle small or big projects'
                />
                
                <Skill cardTitle='SQL - MySQL' 
                    description='Relational database management system with SQL'
                    />

                <Skill cardTitle='Java SE' 
                description='Backend development with Java'
                />
            </Stack>

            
            <Stack direction='row' spacing={2} className='skill-stack-row'>
                <Skill cardTitle='Spring' 
                description='Java framework that focus on speed, simplicity, security and productivity'/>
                <Skill cardTitle='React.js' 
                description='Frontend development with React. A JavaScript library for building user interfaces'/>
                <Skill cardTitle='Material UI' 
                description='open-source React component library that implements Google`s Material Design'/>
                
            </Stack>  
        </Stack>
    </Box> 
    );
}

export default Skills;