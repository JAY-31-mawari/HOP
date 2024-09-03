import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid2, TextField, InputLabel } from '@mui/material';
import { IconButton, InputAdornment, Link } from '@mui/material';
import { Select, MenuItem, FormControl, ListItemIcon, ListItemText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import BackgroundDesign from '../../assets/Landing_Page/Sign Up.png'
import HopHeader from '../../components/header/header';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [countries, setCountries] = useState([])
  const [countryPhoneCode, setCountryPhoneCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleCountryChange = (country) => {
    setCountryPhoneCode(country.callingCodes[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!firstName || !lastName || !email || !country || !password || !confirmPassword || !phoneNo) {
      toast.error('Please fill all the required information');
      return;
    }

    if (password !== confirmPassword) {
      toast.error(`Passwords don't match`);
      return;
    }

    console.log("submit");
    navigate('/create-workspace')
  };

  const trigger = () => {
    axios("https://restcountries.com/v2/all")
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => { trigger() }, [])

  return (
    <Box style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundImage: `url(${BackgroundDesign})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily:
        'system-ui', padding: '30px 0'
    }}>
      <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', width: '40%', borderRadius: '20px' }}>
        <Box style={{ width: '75%' }}>

          <HopHeader />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h6' style={{ color: '#1A237E', fontWeight: 600 }}>Get Started</Typography>
            <Typography variant='p' style={{ color: '#8B8B8B', fontWeight: 600 }}>
              Fast-track your form submission and get back to what matters.
            </Typography>
          </Box>

          <Box
            component='form'
            sx={{
              width: '90%',
              margin: '0 auto',
              marginTop: '30px',
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ marginBottom: '15px' }}>
              <InputLabel sx={{ color: 'rgba(76, 76, 76, 1)', marginBottom: '3px' }}>First Name</InputLabel>
              <TextField
                required
                variant='outlined'
                value={firstName}
                placeholder='Krishav'
                onChange={(e) => setFirstName(e.target.value)}
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
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Last Name</InputLabel>
              <TextField
                required
                variant='outlined'
                value={lastName}
                placeholder='Singh'
                onChange={(e) => setLastName(e.target.value)}
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
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>
                Country
              </InputLabel>
              <FormControl fullWidth>
                <Select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  displayEmpty
                  variant="outlined"

                  renderValue={(selected) => {
                    if (!selected) {
                      return <Box>Select your Country</Box>;
                    }
                    const selectedCountry = countries.find((c) => {
                      if (c.name === selected) {
                        handleCountryChange(c)
                        return true
                      }
                      return false
                    });
                    return (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={selectedCountry.flags.svg} alt={`${selectedCountry.name} flag`} width="24" style={{ marginRight: '8px' }} />
                        {selectedCountry.name}
                      </Box>
                    );
                  }}
                  sx={{
                    '& .MuiInputBase-input': {
                      color: '#7B85E4',
                      padding: '10px',
                      backgroundColor: 'rgba(250, 250, 250, 1)',
                    },

                  }}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.name}>
                      <ListItemIcon>
                        <img src={country.flags.svg} alt={`${country.name} flag`} width="24" />
                      </ListItemIcon>
                      <ListItemText primary={country.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>WhatsApp Number</InputLabel>
              <TextField
                required
                variant="outlined"
                value={phoneNo}
                placeholder='9337582674'
                onChange={(e) => setPhoneNo(e.target.value)}
                InputProps={{
                  startAdornment: countryPhoneCode && (
                    <InputAdornment position="start">
                      <span style={{color:'black', fontWeight:500}}>{`+${countryPhoneCode}`}</span>
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
            <div style={{ marginBottom: '15px' }}>
              <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Confirm Password</InputLabel>
              <TextField
                required
                variant='outlined'
                value={confirmPassword}
                placeholder='Krishav123'
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputProps={{
                  style: { fontSize: 14 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                Create Account
              </Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '17px' }}>Already have an account? <span onClick={() => navigate('/login')} style={{ color: 'rgba(255, 87, 34, 1)', fontWeight: 600, cursor: 'pointer' }}>Login Here</span></p>
          </Box>
        </Box>
      </Box>
    </Box>)
}

export default SignUp;
