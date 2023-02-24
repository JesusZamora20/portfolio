import { AppBar, IconButton, Toolbar, Typography, Box, Icon } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import './sidebar.css'; 

function Sidebar() {
    const [theme, setTheme] = useState('Dark');

    return (
        <Box className='Box'>
            <Stack direction='column' spacing={7} className='Stack'>
                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='button-sidebar'>
                        <AccountCircleRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                    <span className='sidebar-text'>me</span>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='button-sidebar'>
                        <ComputerRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                    <span className='sidebar-text'>Skills</span>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='button-sidebar'>
                        <CodeRoundedIcon  className='icon' fontSize='medium'/>
                    </IconButton>
                    <span className='sidebar-text'>Projects</span>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='button-sidebar'>
                        <BusinessCenterRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                    <span className='sidebar-text'>Experience</span>
                </Stack>
            </Stack>

            {/* <IconButton>
                <LightModeRoundedIcon className='icon' fontSize='medium'/>
            </IconButton> */}
        </Box>
    );
}

export default Sidebar;