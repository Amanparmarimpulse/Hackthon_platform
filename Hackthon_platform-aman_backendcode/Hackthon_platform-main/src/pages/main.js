import React from 'react';
import Navbar from './Components/Navbar';
import Midsection from './Components/Midsection';
import { Container, Divider, Box, Typography } from '@mui/material';
import DoubleCards from './Components/DoubleCards';
import Footer from './Components/Footer';

import Mainsection from './Components/Hackathoncomp/Mainsection';
import ProfileCards from './Components/ProfileCards';
import { useMediaQuery, useTheme } from '@mui/material';
import Image from './Components/mainpageimg.jpeg';

export default function Main() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <>
      <style>
        {`
          body {
            overflow-x: hidden;
          }
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
      <Navbar />
      <Midsection />
      <Divider sx={{ marginTop: '3vh', color: 'black' }} />
      <div style={{ display: 'flex', flexDirection: match ? 'column' : 'row', gap: '3%', width: '100vw', marginTop: '3%',height:'100vh' }}>
        {!match && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: '9%',
              padding: 0,
              zIndex: 1,

            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '50%',
                height: '100%',
                borderRadius: '2rem',
                animation: 'float 4s ease-in-out infinite',
              }}
            />
            <Box
              sx={{
                width: '50%',
                color: 'rgba(2, 48, 71, 1)',
                paddingLeft: '2rem',
                
              }}
            >
              <Typography variant="h3" sx={{ fontFamily: 'poppins', fontWeight: 'bold' }}>
                Welcome to Our Platform
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: 'poppins' }}>
                Discover the best hackathons and find the right fit for you.
              </Typography>
            </Box>
          </div>
        )}
      </div>
      <Container sx={{ display: 'flex', flexDirection: match ? 'column' : 'row', gap: '3%', width: '100vw', marginTop: '2rem' }}>
        <Container>
          <Typography
            sx={{
              fontFamily: 'poppins',
              fontSize: '1.8rem',
              fontWeight: 'semi bold',
              marginBottom: '1vh',
            }}
          >
            Hackathons for You
          </Typography>
          <Box
            sx={{ background: 'rgba(23, 44, 87, 1)', padding: '3%', paddingTop: '4%', borderRadius: '2rem' }}
          >
            <Mainsection count={5} query={""} />
          </Box>
        </Container>
        <Container>
          <Typography
            sx={{
              fontFamily: 'poppins',
              fontSize: '2rem',
              fontWeight: 'semi bold',
              marginBottom: '1vh',
            }}
          >
            Find the Right Fit
          </Typography>
          <Box sx={{ padding: '4%', paddingTop: '4%', borderRadius: '2rem', paddingRight: '0' }}>
            <ProfileCards size={12} />
          </Box>
        </Container>
      </Container>
      <DoubleCards />
      <Footer />
    </>
  );
}
