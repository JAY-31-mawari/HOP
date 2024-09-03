import React, { useEffect, useState } from 'react';
import { Box, Typography, Button,  TextField, InputLabel } from '@mui/material';
import { IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import BackgroundDesign from '../../assets/Landing_Page/Sign Up.png'
import HopHeader from '../../components/header/header';
import { toast } from 'react-toastify'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [showPassword, setShowPassword] = useState(false)
 
  const handleLogin = (event) => {
    event.preventDefault()
    if (!email || !password) {
      toast.error('Please fill all the required information');
      return;
    }

    console.log("submit");
    navigate('/create-workspace')
  };


  return (
    <Box style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundImage: `url(${BackgroundDesign})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily:
        'system-ui'
    }}>
      <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', width: '40%', borderRadius: '20px' }}>
        <Box style={{ width: '75%' }}>

          <HopHeader />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h6' style={{ color: '#1A237E', fontWeight: 600 }}>Welcome Back</Typography>
            <Typography variant='p' style={{ color: '#8B8B8B', fontWeight: 600 }}>
              Enter your registered email address & password to login
            </Typography>
          </Box>

          <Box
            component='form'
            sx={{
              width: '90%',
              margin: '0 auto',
              marginTop: '30px',
            }}
            onSubmit={handleLogin}
          >
            <div style={{ marginBottom: '15px' }}>
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Email</InputLabel>
              <TextField
                required
                variant='outlined'
                value={email}
                placeholder='Krishav123@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#7B85E4',
                    padding: '10px',
                    backgroundColor: 'rgba(250, 250, 250, 1)'
                  },
                  width: '100%',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Password</InputLabel>
              <TextField
                required
                variant='outlined'
                value={password}
                placeholder='Krishav123'
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  style: { fontSize: 14 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#7B85E4',
                    padding: '10px',
                    backgroundColor: 'rgba(250, 250, 250, 1)'
                  },
                  width: '100%',
                }}
              />
            </div>
            <div>
              <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                <Typography component='p' style={{ color: 'rgba(255, 87, 34, 1)', fontWeight: 500, cursor: 'pointer', marginBottom:'24px',marginTop:'1px !important' }}>Forgot Password</Typography>
              </Box>
            </div>
            <div>
              <Button
                type='submit'
                sx={{
                  backgroundColor: 'rgba(0, 150, 136, 1)',
                  color: 'white',
                  textTransform: 'none',
                  width: '100%',
                  margin: '10px 0',
                  padding: '10px 10px',
                  fontSize: '18px',
                  fontWeight: 500
                }}
              >
                Sign In
              </Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '17px' }}>Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'rgba(255, 87, 34, 1)', fontWeight: 600, cursor: 'pointer' }}>Signup Here</span></p>
          </Box>
        </Box>
      </Box>
    </Box>)
}

export default Login;
