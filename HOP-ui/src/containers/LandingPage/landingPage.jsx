import { Box, Typography, Button } from '@mui/material';
import HopLogo from '../../assets/Hop-Logo.png'
import LandingPage from '../../assets/Landing_Page/Team Image.png';
import mobileLandingPage from '../../assets/Landing_Page/mobile team image.png'
import GoogleLogo from '../../assets/Google Logo.png';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import './index.scss'
import { useEffect } from 'react';

function LangingPage() {
  const navigate = useNavigate()

  const isMobile = useMediaQuery('(max-width:769px)')
  return (
    <Box style={{ paddingTop:'20px', height: '100%', width: '100%', backgroundColor: '#0F144A' }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        color='white'
        textAlign="center"
      >
        <img src={HopLogo} alt='Hub_of_Productivity' style={{ width: '80px', height: '80px', marginTop:'25px', marginBottom: '18px' }} />

        <Typography variant='h4' mb={1} mr={1} ml={1} style={{ fontWeight: 700, color: '#FAFAFA',fontSize: isMobile ? '22px' : '34px', }}>
          Welcome to Hub of Productivity
        </Typography>

        <Typography variant='subtitle1' mb={2} mr={1} ml={1}
        style={{ 
          color: '#B6B6B6', 
          fontSize: '24px',
          fontSize: isMobile ? '16px' : '24px',
          marginLeft: isMobile ? '38px' : '16px',
          marginRight: isMobile ? '38px' : '16px',
          }}>
          Streamline Your Workflow and Achieve More Every Day
        </Typography>

        <Box className='landingPage_Button'>
          <Button
            variant='contained'
            className='landing_startButton'
            onClick={() => navigate('/signup')}
          >
          Let’s Get Started</Button>
          <Button
            variant='contained'
            className='landing_googleAuth'
          ><img src={GoogleLogo} alt='HOP' style={{marginRight:'6px'}} /> Continue with Google</Button>
        </Box>
        <Box
          component="img"
          src={isMobile ? mobileLandingPage : LandingPage}
          alt="HOP"
          sx={{
            width: '100%',
          }}
        />
      </Box>
    </Box>
  )
}

export default LangingPage
