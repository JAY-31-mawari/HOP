import React, { useEffect, useState } from 'react';
import { Box, Select, Typography, Button, TextField, InputLabel, MenuItem, FormControl, TextareaAutosize, Card, IconButton, CardContent } from '@mui/material';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundDesign from '../../assets/Landing_Page/Sign Up.png'
import HopLogo from '../../assets/Hop-Logo.png'
import CloseIcon from '../../assets/Landing_Page/Shape.png'
import SuccessAnimation from '../../assets/Animation Container.png'
import { useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function WorkSpace() {
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState('')
  const [industryName, setIndustryName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [companyDesc, setCompanyDesc] = useState('')
  const [successPopupOpen, setSuccessPopupOpen] = useState(false)

  const IndustryName = ["Manufacturing", "Trading", "Retail/E-Commerce", "Service Provider", "Real Estate/Construction/Interior/Architects", "Financial Consultants (CA/Wealth Planner/ Insurance)", "Healthcare (Doctors/Clinics/Physician/Hospitals)", "Logistics", "Travel/Tourism", "Other"]

  const TeamSize = ["1-10", "11-20", "21-30", "31-50", "51 & Above"]

  const isMobile = useMediaQuery('(max-width:769px)');

  const handleCreate = (event) => {
    event.preventDefault()
    if (!companyName || !industryName || !teamSize || !companyDesc) {
      toast.error('Please fill all the required information');
      return;
    }
    setSuccessPopupOpen(true)

    const workspaceData = {
      companyName,
      industryName,
      teamSize,
      companyDesc,
    }

    const workspaceOptions = {
      method: 'POST',
      // url: global.config.ROOTURL.prod + '',
      headers: {
        'Content-Type': 'application/json',
      },
      data: workspaceData
    };

    axios(workspaceOptions)
      .then((data) => {
        console.log(data)
        navigate('./')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(7px)', position: 'relative' }}>
      <Box style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundImage: `url(${BackgroundDesign})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily:
          'system-ui', padding: isMobile ? '0' : '20px 0', backgroundColor: `${successPopupOpen ? 'rgba(0, 0, 0, 0.5)' : 'white'}`
      }}>
        <Box style={{
          display: 'flex', justifyContent: 'center',
          width: isMobile ? '100%' : '40%',
          borderRadius: isMobile ? 'none' : '20px',
          padding: isMobile ? '16px' : '0px',
          backgroundColor: 'white'
        }}>
          <Box style={{ width: isMobile ? '100%' : '75%' }}>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={HopLogo} alt='Hop-Logo' style={{ height: '80px', width: '80px', margin: '18px 6px' }} />

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h6' style={{ color: '#1A237E', fontWeight: 600 }}>Create Your Workspace</Typography>
              <Typography variant='p' style={{ color: '#8B8B8B', fontWeight: 600, textAlign: 'center' }}>
                Personalize workspace for efficient task organization and collaboration.
              </Typography>
            </Box>

            <Box
              component='form'
              sx={{
                width: '90%',
                margin: '0 auto',
                marginTop: '30px',
              }}
              onSubmit={handleCreate}
            >
              <div style={{ marginBottom: '15px' }}>
                <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Company Name</InputLabel>
                <TextField
                  required
                  variant='outlined'
                  value={companyName}
                  placeholder='WellnessSync'
                  onChange={(e) => setCompanyName(e.target.value)}
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
              <div style={{ marginBottom: '15px', width: '100%' }}>
                <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Business Industry</InputLabel>
                <FormControl fullWidth>
                  <Select
                    required
                    value={industryName}
                    onChange={(event) => setIndustryName(event.target.value)}
                    displayEmpty
                    sx={{
                      '& .MuiInputBase-input': {
                        color: '#7B85E4',
                        padding: '10px',
                        backgroundColor: 'rgba(250, 250, 250, 1)',
                      },
                      width: '100%'
                    }}
                  >
                    <MenuItem value="" disabled>
                      <Box>Choose an industry</Box>
                    </MenuItem>
                    {IndustryName.map((industry, index) => (
                      <MenuItem key={index} value={industry}>
                        {industry}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Team Size</InputLabel>
                <FormControl fullWidth>
                  <Select
                    required
                    value={teamSize}
                    onChange={(event) => setTeamSize(event.target.value)}
                    displayEmpty
                    sx={{
                      '& .MuiInputBase-input': {
                        color: '#7B85E4',
                        padding: '10px',
                        backgroundColor: 'rgba(250, 250, 250, 1)',
                      },
                      width: '100%'
                    }}
                  >
                    <MenuItem value="" disabled>
                      <Box>1-10</Box>
                    </MenuItem>
                    {TeamSize.map((team, index) => (
                      <MenuItem key={index} value={team}>
                        {team}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <InputLabel sx={{ color: '#4C4C4C', marginBottom: '3px' }}>Company Description</InputLabel>
                <FormControl fullWidth>
                  <TextareaAutosize
                    required
                    value={companyDesc}
                    onChange={(event) => setCompanyDesc(event.target.value)}
                    minRows={2}
                    style={{ fontSize: '18px', padding: '4px 8px', color: '#7B85E4', backgroundColor: 'rgba(250, 250, 250, 1)', fontFamily: 'system-ui', borderRadius: '15px !important' }}
                    sx={{
                      '& .MuiInputBase-input': {
                        color: '#7B85E4',
                        padding: '10px',
                        backgroundColor: 'rgba(250, 250, 250, 1)',
                      },
                      width: '100%'
                    }}
                  />
                </FormControl>
              </div>
              <div>
                <Button
                  type='submit'
                  sx={{
                    backgroundColor: 'rgba(0, 150, 136, 1)',
                    color: 'white',
                    textTransform: 'none',
                    width: '100%',
                    margin: '30px 0',
                    padding: isMobile ? '7px 7px' : '10px 10px',
                    fontSize: isMobile ? '15px' : '18px',
                    fontWeight: 500
                  }}
                >
                  Create Workspace
                </Button>
              </div>
            </Box>
          </Box>
        </Box>
        {successPopupOpen && (
          <>
            {/* Semi-transparent background overlay */}
            <Box
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 10,
              }}
            />
            {/* Popup content */}
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                width: isMobile ? '84%' : '38%',
                height: 'auto',
                zIndex: 20,
              }}
            >
              <Card style={{ backgroundColor: 'white', textAlign: 'center', width: '100%', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <img
                    src={CloseIcon}
                    alt="Success_Popup"
                    style={{ height: '24px', width: '24px', margin: '16px', cursor: 'pointer' }}
                    onClick={() => setSuccessPopupOpen(false)}
                  />
                </div>
                <img src={SuccessAnimation} alt="Success_Image" style={{ height: '70%', width: '70%' }} />
                <CardContent>
                  <Typography variant="h6" gutterBottom style={{ color: 'rgba(0, 150, 136, 1)', fontWeight: 700 }}>
                    WORKSPACE CREATED SUCCESSFULLY
                  </Typography>
                  <Typography variant="body2" style={{ color: 'rgba(149, 153, 157, 1)' }}>
                    You're all set! Start organizing your tasks and collaborating with your team in your new workspace.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </>
        )}

      </Box>
    </div>)
}

export default WorkSpace;
