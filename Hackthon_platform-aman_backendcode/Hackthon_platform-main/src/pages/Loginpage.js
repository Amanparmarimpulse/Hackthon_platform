import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Components/Navbar';
import Image from './Components/loginimg.jpeg';
import { auth } from '../firebase/config.js';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const DeveloperProfile = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
   
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate('/home'); // Redirect to home page
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            if (errorCode === 'auth/invalid-email') {
                setEmailError(errorMessage);
                setPasswordError(''); // Clear password error
            } else if (errorCode === 'auth/wrong-password') {
                setPasswordError(errorMessage);
                setEmailError(''); // Clear email error
            } else {
                setEmailError('');
                setPasswordError('Authentication failed'); // Generic authentication error
            }
        }
    };

    const handlePasswordReset = async () => {
        const email = prompt('Please enter your email');
        if (!email) {
            alert('Please enter an email');
            return;
        }
    
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Email sent! Check your mailbox");
        } catch (error) {
            alert("Error sending password reset email: " + error.message);
        }
    };

    
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        background: 'white', 
        minHeight: '100vh', 
        width: '100%', 
        overflowX: 'hidden', 
        boxSizing: 'border-box',
        padding: isSmallScreen ? '1rem' : '2rem'
      }}>
        
        <Container sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: 'rgb(71, 101, 216)', 
          padding: isSmallScreen ? '1rem' : '2rem',
          borderRadius: '10px',
          width: '100%',
          maxWidth: isSmallScreen ? '100%' : '500px'
        }}>
          <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography sx={{ 
              fontWeight: 'bold', 
              fontSize: isSmallScreen ? '1.5rem' : '2rem', 
              fontFamily: 'poppins', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Container sx={{ marginBottom: '1rem' }}>
                <Typography component="label" sx={{ 
                  fontSize: isSmallScreen ? '0.9rem' : '1rem',
                  color: 'white'
                }}>
                  Developer Email ID for contact:
                </Typography>
                <TextField
                  sx={{
                    width: '100%',
                    borderRadius: '7px',
                    backgroundColor: 'white',
                    marginTop: '0.5rem'
                  }}
                  variant='filled'
                  size='small'
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <Typography color="error" sx={{ fontSize: isSmallScreen ? '0.8rem' : '0.9rem' }}>{emailError}</Typography>}
              </Container>
              <Container sx={{ marginBottom: '1rem' }}>
                <Typography component="label" sx={{ 
                  fontSize: isSmallScreen ? '0.9rem' : '1rem',
                  color: 'white'
                }}>
                  Enter Password:
                </Typography>
                <TextField
                  sx={{
                    width: '100%',
                    borderRadius: '7px',
                    backgroundColor: 'white',
                    marginTop: '0.5rem'
                  }}
                  variant='filled'
                  size='small'
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <Typography color="error" sx={{ fontSize: isSmallScreen ? '0.8rem' : '0.9rem' }}>{passwordError}</Typography>}
              </Container>
              <Box sx={{ 
  display: 'flex', 
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: { xs: 'center', sm: 'center '},
  alignItems: 'center',
  width: '100%',
  mt: 2,
  gap:'10%'
}}>
  <Button 
    type="submit" 
    sx={{
      backgroundColor: 'white',
      width: { xs: '100%', sm: '48%' },
      maxWidth: '300px',
      mb: { xs: 2, sm: 0 },
      borderRadius: '30px',
      '&:hover': {
        backgroundColor: 'lightgrey',
      },
    }}
  >
    <Typography sx={{
      fontWeight: 'bold',
      fontFamily: 'poppins',
      fontSize: { xs: '0.8rem', sm: '0.9rem' }
    }}>
      Submit
    </Typography>
  </Button>
  <Button 
    href="/developer" 
    sx={{
      backgroundColor: 'white',
      width: { xs: '100%', sm: '48%' },
      maxWidth: '300px',
      borderRadius: '30px',
      '&:hover': {
        backgroundColor: 'lightgrey',
      },
    }}
  >
    <Typography sx={{
      fontWeight: 'bold',
      fontFamily: 'poppins',
      fontSize: { xs: '0.8rem', sm: '0.9rem' }
    }}>
      Signup
    </Typography>
  </Button>
</Box>
              <Container sx={{ display: 'flex', marginTop: '1rem', justifyContent: 'center' }}>
                <Typography 
                  onClick={handlePasswordReset} 
                  sx={{ 
                    textDecoration: 'none', 
                    color: 'white', 
                    cursor: 'pointer',
                    fontSize: isSmallScreen ? '0.8rem' : '0.9rem'
                  }}
                >
                  Forget Password?
                </Typography>
              </Container>
            </form>
          </Container>
        </Container>
      </Box>
    </>
  );

}

export default DeveloperProfile;
