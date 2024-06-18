import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, useTheme, useMediaQuery, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import WifiOffIcon from '@mui/icons-material/WifiOff';
import BusinessIcon from '@mui/icons-material/Business';
import WifiIcon from '@mui/icons-material/Wifi';
import EventIcon from '@mui/icons-material/Event';
import StyleIcon from '@mui/icons-material/Style';

function Mainsection(props) {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if (props.query === '') {
                setData(data.hackathons); // Assuming data.hackathons exists
            } else if (data.hackathons) {
                const filteredHackathons = data.hackathons.filter(hackathon => 
                    hackathon.title && hackathon.title.toLowerCase().includes(props.query.toLowerCase())
                );
                setData(filteredHackathons);
                if (filteredHackathons.length === 0) {
                    console.log('No matching hackathons found');
                }
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    useEffect(() => {
        getData();
    }, [props.query]); 

    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    let counter = props.count;
   console.log(props.query)
    const cardStyles = {
        display: 'flex',
        flexDirection: match ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: match ? 'center' : 'flex-start',
        maxWidth: match ? '80%' : '100%',
        padding: '3%',
        border: 'none',
        borderRadius:'10px',
        borderTop: 'solid rgba(23, 44, 87, 1) 7px',
        marginBottom: '5%',
        backgroundColor: '#f9f9f9',
        fontFamily:'poppins',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        },
    };

    const themeContainerStyles = {
        backgroundColor: 'rgb(255, 214, 10,0.8)',
        border: 'none',
        padding: '2px',
        
        margin: '2px 0',
        colors:'black',
        fontFamily:'poppins',
        width:'10em',
        borderRadius:'10px',
        marginBottom:'0.4em'
    };

    const iconTextContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        fontFamily:'poppins',
        gap: '3px',
        alignItems: 'center',
        marginBottom: '8px',
    };

    return (
        <>
            <Container sx={{ marginLeft: match ? '10%' : '0',boxSizing:'border-box' }} >
                {data && data.length > 0 && data.map((val) => {
                    if (counter > 0) {
                        counter--;
                        return (
                            <Link to={`${val.url}`} key={val.id} style={{ textDecoration: 'none' }}> 
                                <Card sx={cardStyles}>
                                    
                                        <Container sx={{ textAlign: 'center', marginBottom: '16px' ,underline:'none'}}>
                                            <img src={val.thumbnail_url} alt={val.title} style={{ width: '100%', borderRadius: '8px' }} />
                                        </Container>
                                    
                                    <Container>
                                        <Typography variant="h6" component="div" sx={{fontFamily:'poppins',}}>
                                            <b>{val.title}</b>
                                        </Typography>
                                        
                                        <Typography variant="body2" color="textSecondary" sx={{fontFamily:'poppins',}}>
                                            {val.time_left_to_submission}
                                        </Typography>
                                        <Box sx={iconTextContainerStyles}>
                                            {val.displayed_location.location === 'Online' ? (
                                                <>
                                                    <WifiIcon color="primary" />
                                                    <Typography sx={{fontFamily:'poppins',}}>{val.displayed_location.location}</Typography>
                                                </>
                                            ) : (
                                                <>
                                                    <WifiOffIcon color="error" />
                                                    <Typography sx={{fontFamily:'poppins',}}>{val.displayed_location.location}</Typography>
                                                </>
                                            )}
                                        </Box>
                                        <Typography variant="body2" color="textSecondary" sx={{fontFamily:'poppins',}}>{val.prize_amount}</Typography>
                                        <Typography variant="body2" color="textSecondary" sx={{fontFamily:'poppins',}}>{val.registrations_count} participants</Typography>
                                        <Button variant='contained' sx={{marginTop:'8%',marginLeft:'0'}}>Register</Button>
                                    </Container>
                                    {!match && (
                                        <Container sx={{ marginLeft: '16px' }}>
                                            
                                            <Box sx={iconTextContainerStyles}>
                                            
                                                <BusinessIcon color="action" />
                                                <Typography sx={{fontFamily:'poppins',}}>{val.organization_name}</Typography>
                                            </Box>
                                            <Box sx={iconTextContainerStyles}>
                                                <EventIcon color="action" />
                                                <Typography sx={{fontFamily:'poppins',}}>{val.submission_period_dates}</Typography>
                                            </Box>
                                            <Typography variant="body2" color="textSecondary" sx={{fontFamily:'poppins',}}>
                                                <StyleIcon color="action" /> Themes:
                                            </Typography>
                                            {val.themes.map((theme) => (
                                                <Container key={theme.id} sx={themeContainerStyles}>{theme.name}</Container>
                                            ))}
                                        </Container>
                                    )}
                                </Card>
                            </Link>
                        );
                    }
                    return null;
                })}
            </Container>
        </>
    );
}

export default Mainsection;
