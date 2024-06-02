import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, useTheme, useMediaQuery } from '@mui/material';
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
        }).then((response) => response.json())
          .then((data) => {
              setData(data.hackathons);
          });
    };

    useEffect(() => {
        getData();
    }, []);

    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    let counter = props.count;

    return (
        <>
            {match ? (
                <Container sx={{ marginLeft: '10%' }}>
                    {data && data.length > 0 && data.map((val) => {
                        if (counter > 0) {
                            counter--;
                            return (
                                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '80%', padding: '3%', alignItems: 'center', border: 'solid grey 1px', borderTop: 'solid rgba(23, 44, 87, 1) 7px', marginBottom: '3%' }} lg={12} key={val.id}>
                                    <Container>
                                        <Typography>
                                            <b>{val.title}</b>
                                            <br></br> {val.time_left_to_submission}
                                            <br></br>
                                            {val.displayed_location.location === 'Online' ? (
                                                <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                                    <WifiIcon />
                                                    <Typography>{val.displayed_location.location}</Typography>
                                                </Container>
                                            ) : (
                                                <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                                    <WifiOffIcon />
                                                    <Typography>{val.displayed_location.location}</Typography>
                                                </Container>
                                            )}
                                        </Typography>
                                        <Typography>{val.prize_amount}</Typography>
                                        <Typography>{val.registrations_count} participants</Typography>
                                    </Container>
                                    <Container>
                                        <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                            <BusinessIcon /> <Typography>{val.organization_name}</Typography>
                                        </Container>
                                        <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                            <EventIcon />
                                            <Typography>{val.submission_period_dates}</Typography>
                                        </Container>
                                        <StyleIcon /> Skills Required:
                                        {val.themes.map((theme) => (
                                            <Container key={theme.id} sx={{ backgroundColor: 'lightblue', border: 'solid 1px rgba(23, 44, 87, 1)', padding: '2px' }}>{theme.name}</Container>
                                        ))}
                                    </Container>
                                </Card>
                            );
                        }
                        return null;
                    })}
                </Container>
            ) : (
                <Container>
                    {data && data.length > 0 && data.map((val) => {
                        if (counter > 0) {
                            counter--;
                            return (
                                <Card sx={{ display: 'flex', flexDirection: 'row', padding: '3%', border: 'solid grey 1px', borderTop: 'solid rgba(23, 44, 87, 1) 7px', marginBottom: '3%' }} lg={12} key={val.id}>
                                    <Container sx={{ backgroundImage: `url(${val.submission_gallery_url})` }}>
                                    </Container>
                                    <Container>
                                        <Typography>
                                            <b>{val.title}</b>
                                            <br></br> {val.time_left_to_submission}
                                            <br></br>
                                            {val.displayed_location.location === 'Online' ? (
                                                <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                                    <WifiIcon />
                                                    <Typography>{val.displayed_location.location}</Typography>
                                                </Container>
                                            ) : (
                                                <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                                    <WifiOffIcon />
                                                    <Typography>{val.displayed_location.location}</Typography>
                                                </Container>
                                            )}
                                        </Typography>
                                        <Typography>{val.prize_amount}</Typography>
                                        <Typography>{val.registrations_count} participants</Typography>
                                    </Container>
                                    <Container>
                                        <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                            <BusinessIcon /> <Typography>{val.organization_name}</Typography>
                                        </Container>
                                        <Container sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                            <EventIcon />
                                            <Typography>{val.submission_period_dates}</Typography>
                                        </Container>
                                        <StyleIcon /> Skills Required:
                                        {val.themes.map((theme) => (
                                            <Container key={theme.id} sx={{ backgroundColor: 'lightblue', border: 'solid 1px rgba(23, 44, 87, 1)', padding: '2px' }}>{theme.name}</Container>
                                        ))}
                                    </Container>
                                </Card>
                            );
                        }
                        return null;
                    })}
                </Container>
            )}
        </>
    );
}

export default Mainsection;
