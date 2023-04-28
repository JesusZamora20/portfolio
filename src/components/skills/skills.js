import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Skill from './skill';
import './skills.css';


function Skills() {
    return ( 
    <Box className='skills-box' >
        <Typography variant='h1' id='skills-title' >Skills & education</Typography>

        <Stack id='skill-stack-column' >
            <Stack id='skill-stack-row'>
                <Skill cardTitle='Mecathronic Engineering' 
                description={`Universidad Tecnologica de Bolivar. Cartagena, Colombia. 2018-2023`}
                />

                <Skill cardTitle='JavaScript / React.js' 
                description='Software and web development with JavaScript and Frontend development with React. A JavaScript library for building user interfaces'
                />

                <Skill cardTitle='HTML & CSS / Material UI' 
                description='Web styling and responsive design with Html and CSS. Styling with Material UI, an open-source React component library that implements Google`s Material Design '
                />
            </Stack>
        
            <Stack  id='skill-stack-row'>

                <Skill cardTitle='Git & GitHub' 
                description='Git is a version control system designed to handle small or big projects'
                />
                
                <Skill cardTitle='SQL - MySQL' 
                    description='Relational database management system with SQL'
                />

                <Skill cardTitle='Java SE - Spring' 
                description='Backend development with Java. Spring is a Java framework that focus on speed, simplicity, security and productivity'
                />
            </Stack>
        </Stack>
    </Box> 
    );
}

export default Skills;