import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import HomeCard from '../home/homeCard';
import './portfolio.css'

function Portfolio() {
    return (
        <Box>
            <Sidebar />
            <HomeCard />
        </Box>
        
    );
}

export default Portfolio;