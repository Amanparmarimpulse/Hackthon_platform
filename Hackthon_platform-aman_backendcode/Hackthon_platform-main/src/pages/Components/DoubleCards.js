import { Button, Container, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Image1 from '../Components/profile.jpeg';
import { keyframes } from '@mui/system';

// Keyframe animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function DoubleCards(props) {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
const smallscreen=props.isSmallScreen
// console.log(smallscreen)
  
return (
    <Box
      sx={{
        width: '100%',
        minHeight: isSmallScreen ? 'auto' : '600px',
        background: 'rgba(23, 44, 87, 1)',
        marginTop: '10vh',
        marginBottom: isSmallScreen ? '5vh' : '10%',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container
        sx={{
          width: isSmallScreen ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          padding: isSmallScreen ? '20px' : '30px',
          boxSizing: 'border-box',
          justifyContent: 'center',
        }}
      >
        <Typography
          fontWeight='xl'
          sx={{
            color: 'white',
            fontSize: isSmallScreen ? '1.5rem' : '2rem',
            marginTop: isSmallScreen ? '10%' : '30%',
            animation: `${bounce} 2s infinite`,
          }}
        >
          Create your Profile now !!
        </Typography>
        <Typography paragraph sx={{ color: 'white', fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
          Create your profile to find the ideal <b>hackathon</b> and for seamless connectivity with other teams.
        </Typography>
        <Button
          size={isSmallScreen ? 'large' : 'xl'}
          variant='contained'
          sx={{
            width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '40%',
            height:'auto',

            padding: '10px',
            borderRadius: isSmallScreen ? '10px' : '50px',
            backgroundColor: 'rgba(0, 210, 255, 1)',
            animation: `${fadeIn} 3s ease-in`,
            marginTop: isSmallScreen ? '20px' : '0',
          }}
          href='/developer'
        >
          Click Here
        </Button>
      </Container>
      {!isSmallScreen && (
        <Container
          sx={{
            width: '50%',
            backgroundImage: `url(${Image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0px',
          }}
        />
      )}
    </Box>
  );

}

export default DoubleCards;
