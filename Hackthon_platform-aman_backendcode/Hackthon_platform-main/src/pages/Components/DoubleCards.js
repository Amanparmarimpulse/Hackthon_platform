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

function DoubleCards() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {match ? (
                <Box
                    sx={{
                        width: '100%',
                        height: 600,
                        background: ' rgba(23, 44, 87, 1) ',
                        marginTop: '10vh',
                        display: 'flex',
                        overflow: 'hidden',
                        position: 'relative',
                       
                       
                        
                    }}
                >
                    <Container
                        sx={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2%',
                            marginBottom: '3%',
                            padding: '30px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography
                            fontWeight='xl'
                            sx={{
                                color: 'white',
                                fontSize: '2rem',
                                marginTop: '30%',
                                animation: `${bounce} 2s infinite`
                            }}
                        >
                            Create your Profile now !!
                        </Typography>
                        <Typography paragraph sx={{ color: 'white' }}>
                            Create your profile to find the ideal <b>hackathon</b> and for seamless connectivity with other teams.
                        </Typography>
                        <Button
                            size='xl'
                            variant='contained'
                            sx={{
                                width: '80%',
                                height: '8%',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(0, 210, 255, 1)',
                               
                            }}
                            href='/developer'
                        >
                            Click Here
                        </Button>
                    </Container>
                    <Container
                        sx={{
                            width: '50%',
                            backgroundImage: `url(${Image1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                           
                        }}
                    />
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            width: '100%',
                            height: 600,
                            background: ' rgba(23, 44, 87, 1) ',
                            marginBottom: '10%',
                            marginTop: '10vh',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'relative',
                          
                        }}
                    >
                        <Container
                            sx={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '5%',
                                padding: '20px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Typography
                                fontWeight='xl'
                                sx={{
                                    color: 'white',
                                    fontSize: '2rem',
                                    marginTop: '30%',
                                    animation: `${bounce} 2s infinite`
                                }}
                            >
                                Create your Profile now !!
                            </Typography>
                            <Typography paragraph sx={{ color: 'white' }}>
                                Create your profile to find the ideal <b>hackathon</b> and for seamless connectivity with other teams.
                            </Typography>
                            <Button
                                size='xl'
                                variant='contained'
                                sx={{
                                    width: '40%',
                                    height: '8%',
                                    borderRadius: '50px',
                                    backgroundColor: 'rgba(0, 210, 255, 1)',
                                    animation: `${fadeIn} 3s ease-in`
                                }}
                                href='/developer'
                            >
                                Click Here
                            </Button>
                        </Container>
                        <Container
                            sx={{
                                width: '50%',
                                backgroundImage: `url(${Image1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '0px',
                            }}
                        />
                    </Box>
                </>
            )}
        </>
    );
}

export default DoubleCards;
