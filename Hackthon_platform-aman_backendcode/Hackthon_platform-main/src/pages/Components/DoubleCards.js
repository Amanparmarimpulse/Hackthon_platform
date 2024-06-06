import { Button, Container, Typography, useTheme,useMediaQuery } from '@mui/material';
import React from 'react';
import Image1 from '../Components/profile.jpeg';

function DoubleCards() {
    const theme=useTheme();
    const match=useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <>
        { match?(  <Container
            sx={{
                width: 500,
                height: 600,
                // borderRadius: 1,
                bgcolor: 'rgba(23, 44, 87, 1)',
                borderRadius: '50px',
                marginTop: '10vh',
                display: 'flex',
                overflow: 'hidden', 
               
            }}
        >
            <Container
                sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                   
                    padding: '20px',
                    boxSizing: 'border-box'
                }}
            >
                <Typography fontWeight='xl' sx={{
                    color: 'white',
                    fontSize: '2rem',
                marginTop:'30%',
               
                }}>
                    Create your Profile now !!
                </Typography>
                <Typography paragraph sx={{ color: 'white' }}>
                    Create your profile to find the ideal <b>hackathon</b> and for seamless connectivity with other teams.
                </Typography>
                <Button size='xl' variant='contained' sx={{width:'80%',height:'8%',borderRadius:'10px'}} href='/developer'>
                    Click Here
                </Button>
            </Container>
            <Container
                sx={{
                    width: '50%',
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50px',
                }}
            />
        </Container>
        ):
        (
            <>
            <Container
            sx={{
                width:'100%',
                height: 600,
                // borderRadius: 1,
                bgcolor: 'rgba(23, 44, 87, 1)',
                borderRadius: '50px',
                marginTop: '10vh',
                display: 'flex',
                overflow: 'hidden' // Ensure the image stays within the border radius
            }}
        >
            <Container
                sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                   
                    padding: '20px',
                    boxSizing: 'border-box'
                }}
            >
                <Typography fontWeight='xl' sx={{
                    color: 'white',
                    fontSize: '2rem',
                marginTop:'30%'
                }}>
                    Create your Profile now !!
                </Typography>
                <Typography paragraph sx={{ color: 'white' }}>
                    Create your profile to find the ideal <b>hackathon</b> and for seamless connectivity with other teams.
                </Typography>
                <Button size='xl' variant='contained' sx={{width:'40%',height:'8%',borderRadius:'10px'}} href='/developer'>
                    Click Here
                </Button>
            </Container>
            <Container
                sx={{
                    width: '50%',
                    backgroundImage: `url(${Image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50px',
                }}
            />
        </Container>
    </>)}
            
        </>
    );
}

export default DoubleCards;
