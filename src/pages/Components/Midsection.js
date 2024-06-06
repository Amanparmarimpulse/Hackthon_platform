import React from 'react';
import { Typography, Container, Button, Box } from '@mui/material';
import Image from '../Components/Poster.jpeg';

function Midsection() {
  return (
    <>
      <Container
        sx={{
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
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            zIndex: 1,
            transition: 'background-color 0.3s ease-in-out', 
          },
          '&:hover::before': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant='h4' sx={{ color: 'white' }}> 
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
            <Button variant="contained" sx={{ background: 'black', borderRadius: '10px' }} size='large' href='/Hackathon'>
              Hackathons
            </Button>
            <Button variant="contained" sx={{ background: 'black', borderRadius: '10px' }} size='large'>
              Teams
            </Button>
          </Container>
        </Box>
      </Container>
    </>
  );
}

export default Midsection;
