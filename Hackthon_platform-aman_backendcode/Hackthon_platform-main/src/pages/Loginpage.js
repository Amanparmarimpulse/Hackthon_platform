import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate('/home'); // Redirect to home page
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
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

    const handlePasswordReset = () => {
        const email = prompt('Please enter your email');
        if (email === '') {
            alert('Please enter an email');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Email sent! Check your mailbox");
                })
                .catch((error) => {
                    alert("Error sending email: " + error.message);
                });
        }
    };

    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', height: '100vh', width: '100vw', flexDirection: match ? 'column' : 'row', overflowX: 'hidden', boxSizing: 'border-box' }}>
                {!match && <Container sx={{
                    backgroundImage: `url(${Image})`,
                    zIndex: '1',
                    height: match ? '100%' : "80%",
                    width: match ? '100%' : '80%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginTop: match ? '1%' : '9%',
                    paddingTop: match ? '1%' : '0',
                    marginLeft: '8%'
                }}>
                </Container>}
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(71, 101, 216)', height: '100vh', fontFamily: 'poppins', fontSize: '1.3rem', width: '100vw', color: 'white', marginLeft: '10%' }}>
                    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'poppins', marginBottom: '2%' }}>Login</Typography>
                        <form onSubmit={handleSubmit}>
                            <Container className="form-group">
                                <label>Developer Email ID for contact:</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        textAlign: 'center'
                                    }}
                                    variant='filled'
                                    size='small'
                                    margin='dense'
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <Typography color="error">{emailError}</Typography>}
                            </Container>
                            <Container >
                                <label>Enter Password:</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        textAlign: 'center'
                                    }}
                                    variant='filled'
                                    size='small'
                                    margin='dense'
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <Typography color="error">{passwordError}</Typography>}
                            </Container>
                            <Button type="submit" sx={{
                                backgroundColor: 'white', marginTop: '5%', marginLeft: '3%', width: '30%', borderRadius: '30px', height: '14%', '&:hover': {
                                    backgroundColor: 'lightgrey',
                                },
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins !important' }}>Submit</Typography>
                            </Button>
                            <Button href="/developer" sx={{
                                backgroundColor: 'white', marginTop: '5%', marginLeft: '3%', width: '30%', borderRadius: '30px', height: '14%', '&:hover': {
                                    backgroundColor: 'lightgrey',
                                },
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins !important' }}>Signup</Typography>
                            </Button>
                            <Container sx={{ display: 'flex', marginTop: '1rem', justifyContent: 'center' }}>
                                <p onClick={handlePasswordReset} style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                                    Forget Password?
                                </p>
                            </Container>
                        </form>
                    </Container>
                </Container>
            </Box>
        </>
    );
}

export default DeveloperProfile;
