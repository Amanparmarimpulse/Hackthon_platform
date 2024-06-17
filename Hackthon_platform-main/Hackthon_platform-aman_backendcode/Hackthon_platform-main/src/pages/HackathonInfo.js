import React from 'react'
import Navbar from '../pages/Components/Navbar'
import { Container,Typography } from '@mui/material'
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';



  
function HackathonInfo() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Container sx={{padding:'2vh'}}>
    <Navbar></Navbar>
    <Container sx={{height:150, backgroundColor:'rgba(23, 44, 87, 1)',marginTop:'5vh',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',
}}>
    <Typography sx={{
        fontSize:'2rem' ,fontWeight:'2rem',color:'white'
    }}>
        Hackathon Name 
    </Typography>
</Container>
<Container sx={{marginTop:'2%'}}>
<Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'rgba(23, 44, 87, 1)'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Overview" value="1" />
            <Tab label="My Project" value="2"  />
           
          </TabList>
        </Box>
        <TabPanel value="1" >Item One</TabPanel>
        <TabPanel value="2" >Item Two</TabPanel>
       
      </TabContext>
    </Box>
</Container>

    </Container>
    

    </>
  )
}

export default HackathonInfo