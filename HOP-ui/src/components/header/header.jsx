import { Box, Typography} from '@mui/material';
import HopLogo from '../../assets/Hop-Logo.png';
import { useMediaQuery } from '@mui/material';

function HopHeader() {

  const isMobile = useMediaQuery('(max-width:769px)');

  return (
    <Box style={{display:'flex',justifyContent:'center',alignItems:'center', margin:'20px 6px',paddingBottom:'16px', borderBottom:'1px solid #E0E0E0'}}>
      <Box>
        <img src={HopLogo} alt='HOP_Logo' style={{marginRight:'12px', height: isMobile ? '60px' : '80px', width: isMobile ? '60px' : '80px'}}/>
      </Box>
      <Box style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography style={{color:'#1A237E', fontWeight:600, fontSize: isMobile ? '22px' :'26px'}}>HUB OF PRODUCTIVITY</Typography>
        <Typography style={{color:'#545363', fontWeight:600, fontSize: isMobile ? '16px ':'20px'}} >Work Smart, Achieve More</Typography>
      </Box>
    </Box>)
}

export default HopHeader
