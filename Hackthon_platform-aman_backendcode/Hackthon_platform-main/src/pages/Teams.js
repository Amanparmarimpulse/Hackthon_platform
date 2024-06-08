import React from 'react';
import Navbar from './Components/Navbar';

import ProfileCards from './Components/ProfileCards';
import { Container, Typography } from '@mui/material';

const Teams = () => {
 
  return (
    <>
  
      <Navbar />
      <Container sx={{height:150, backgroundColor:'rgba(2, 48, 71, 1)',marginTop:'3vh',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'2vh'
}}>
    <Typography sx={{
        fontSize:'2rem' ,fontWeight:'2rem',color:'white', fontFamily:'poppins ',
    }}>
        Find The best <b>Developers</b> Here!!!
    </Typography>
</Container>
   <Container>
    
   </Container>


      <Typography
      
      sx={{
        fontWeight: 'bold',
        fontSize: '2.5rem',
      marginLeft:'3.5em',
        marginBottom:"2rem",
        marginTop: '2rem',
              
        color:'rgb(2, 48, 71,1)',
       
        letterSpacing: '0.1em',
        fontFamily:'poppins',
      }}
    >
      Developers
    </Typography>
      
        <Container sx={{background:'light grey'}}>  <ProfileCards size={6} count={1000}></ProfileCards ></Container>
  
   
    </>
  );
}

export default Teams;
