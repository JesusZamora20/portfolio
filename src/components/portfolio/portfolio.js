import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../header/sidebar';
import HomeCard from '../home/homeCard';
import './portfolio.css'

function Portfolio() {
    return (
        <Box className='background'>
            <Sidebar />
            <HomeCard />
        </Box>
        
    );
}

export default Portfolio;