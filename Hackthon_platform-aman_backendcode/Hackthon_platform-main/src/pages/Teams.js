import React from 'react';
import Navbar from './Components/Navbar';
import ProfileCards from './Components/ProfileCards';
import { Container, Typography, Box, Button } from '@mui/material';
import Image2 from './Components/teamspageimg.jpeg';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material';

const Teams = () => {
  



  
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: '80vh',
          marginTop: '3vh',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2vh',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
          padding: '2rem',
        }}
      >
        <Container sx={{display:'flex',flexDirection:'column',gap:'3vh'}}>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'rgba(2, 48, 71, 1)',
              fontFamily: 'Poppins',
              animation: 'fadeInLeft 1s ease-in-out',
              maxWidth: { xs: '100%', md: '100%' },
              marginLeft:{md:'5%'}
            }}
          >
            Become a developer
            <br></br> and Unleash your potential
            
          </Typography>
          <Box sx={{
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-start' },
  width: '100%',
}}>
  <Button
    sx={{
      width: { xs: '8em', sm: '10em' },
      background: 'rgb(191, 210, 208)',
      color: 'rgba(2, 48, 71, 1)',
      borderRadius: '25px',
      padding: '0.5em 1em',
      marginTop: '1em',
      marginBottom: '2vh',
      marginLeft: { md: '3em' }, // Only apply left margin on medium screens and up
      fontSize: { xs: '0.8rem', sm: '1rem' },
      textTransform: 'none',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        background: 'rgb(191, 210, 208)',
        transform: 'scale(1.05)',
      },
    }}
    href='/developer'
  >
    Register
  </Button>
</Box>

        </Container>
        <Container
          sx={{
            width: { xs: '100%', md: '100%' },
            height: '100%',
            backgroundImage: `url(${Image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: {md:'moveImage 5s infinite linear'},
            borderRadius: '10px',
            paddingTop:{sx:'2%',md:'2vh'}
            
          }}
        ></Container>
      </Box>

      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
         
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '2.5rem',
            color: 'rgb(2, 48, 71)',
            letterSpacing: '0.1em',
            fontFamily: 'Poppins',
          }}
        >
          Developers
        </Typography>
      </Box>

      <Container sx={{ padding: '2rem', borderRadius: '10px',backgroundColor:'rgb(191, 210, 208)' }}>
        <ProfileCards size={6} count={5} />
      </Container>

      
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes moveImage {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Teams;
