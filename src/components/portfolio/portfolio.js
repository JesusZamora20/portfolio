import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import HomeCard from '../home/homeCard';
import './portfolio.css'
import Skills from '../skills/skills';

function Portfolio() {
    return (
        <Box>
            <Sidebar />
            <HomeCard />
            <Skills/>
        </Box>
        
    );
}

export default Portfolio;