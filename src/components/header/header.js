import { AppBar, IconButton, Toolbar, Typography, Box, Icon } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import './header.css'; 

function Header() {
    const [theme, setTheme] = useState('Dark');

    return (
        <Box className='Box'>
            <Stack direction='column' spacing={4} className='Stack'>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='icon'>
                        <HomeRoundedIcon fontSize='large'/>
                    </IconButton>
                    {/* <Typography className='icon-font'>Home</Typography> */}
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='icon'>
                        <AccountCircleRoundedIcon fontSize='large'/>
                    </IconButton>
                    {/* <Typography  className='icon-font'>About.Me</Typography> */}
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='icon'>
                        <ComputerRoundedIcon fontSize='large'/>
                    </IconButton>
                    {/* <Typography  className='icon-font'>Skills</Typography> */}
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='icon'>
                        <CodeRoundedIcon fontSize='large'/>
                    </IconButton>
                    {/* <Typography  className='icon-font'>Projects</Typography> */}
                </Stack>

                <Stack direction='column' className='Sidebar-item'>
                    <IconButton className='icon'>
                        <BusinessCenterRoundedIcon  fontSize='large'/>
                    </IconButton>
                    {/* <Typography  className='icon-font'>Experience</Typography> */}
                </Stack>
            </Stack>

            <IconButton className='icon'>
                <LightModeRoundedIcon fontSize='large'/>
            </IconButton>
        </Box>
    );
}

export default Header;