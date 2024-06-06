import React, { useState } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import Image from '../Components/Poster.jpeg';

function Midsection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '2vh',
          height: '80vh',
          width: '100%',
          
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={isHovered ? 'before-hover' : 'before'}
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
            transition: 'background-color 0.3s ease-in-out',
          }}
        ></div>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            fontFamily: 'poppins',
          }}
        >
          <Typography sx={{ color: 'white', fontFamily: 'poppins', fontSize:isHovered? '3rem':'2.5rem', fontWeight:'bold',transition:' 0.1s ease-in'}}>
            Find your interest now!!!
          </Typography>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              marginTop: '1vw',
            }}
          >
            <Button variant="contained" sx={{ background: 'black', borderRadius: '10px', fontFamily: 'poppins' }} size="large" href="/Hackathon">
              Hackathons
            </Button>
            <Button variant="contained" sx={{ background: 'black', borderRadius: '10px', fontFamily: 'poppins' }} size="large" href='/Teams'>
              Developers
            </Button>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default Midsection;
