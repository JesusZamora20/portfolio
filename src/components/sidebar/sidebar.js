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
                    <IconButton>
                        <AccountCircleRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton >
                        <ComputerRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton >
                        <CodeRoundedIcon  className='icon' fontSize='medium'/>
                    </IconButton>
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton >
                        <BusinessCenterRoundedIcon className='icon' fontSize='medium'/>
                    </IconButton>
                </Stack>
            </Stack>

            {/* <IconButton>
                <LightModeRoundedIcon className='icon' fontSize='medium'/>
            </IconButton> */}
        </Box>
    );
}

export default Sidebar;