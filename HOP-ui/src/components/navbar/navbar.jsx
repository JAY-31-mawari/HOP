import React from "react";
import { Box, Typography, TextField, InputAdornment, Avatar } from '@mui/material';
import HopLogo from '../../assets/hop-navbar.png';
import SearchIcon from '@mui/icons-material/Search';
import chatIcon from '../../assets/chatIcon.png';
import notificationBell from '../../assets/notificationBell.png'


const Navbar = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 25px', borderBottom:'1px solid rgba(224, 224, 224, 1)'}}> 
            <Box>
                <img src={HopLogo} alt='navbar_logo' />
            </Box>
            <Typography style={{ color: 'rgba(99, 110, 114, 1)' }}>Dashboard</Typography>
            <TextField
                variant="outlined"
                placeholder="Search"
                style={{width:'30%'}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: '#9e9e9e' }} />
                        </InputAdornment>
                    ),
                    style: {
                        borderRadius: 12,
                        backgroundColor: '#F2F2F2',
                        paddingLeft: 10,
                        height: 40,
                    }
                }}
            />
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'22%'}}>
                <img src={chatIcon} alt='chat-icon'/>
                <img src={notificationBell} alt='notification-icon'/>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Avatar style={{marginRight:'10px'}}/>
                    <Box>
                        <Typography>John Doe</Typography>
                        <Typography>johndoe@example.com</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar;