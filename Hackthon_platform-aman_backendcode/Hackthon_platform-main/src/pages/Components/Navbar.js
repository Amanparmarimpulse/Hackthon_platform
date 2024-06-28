import React, { useState, useEffect } from 'react';
import { AppBar, Container, Link, Button, CssBaseline, Toolbar, useMediaQuery, useTheme, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Drawercomp from './Drawer';
import Avatar from "@mui/material/Avatar";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
    const [developers, setDevelopers] = useState([]);
    const [user, setUser] = useState(null);
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));

    const auth = getAuth(); // Move auth declaration here

    useEffect(() => {
        fetchDeveloperData(); // Fetch developer data on component mount
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log(user);
        });

        return () => unsubscribe();
    }, []);

    // Fetch developer data from MongoDB collection
    const fetchDeveloperData = () => {
        fetch('https://hackthon-platform-2.onrender.com/developers')
            .then(response => response.json())
            .then(data => {
                setDevelopers(data);
                console.log('Data successfully fetched:', data);
            })
            .catch(err => console.error('Error fetching data:', err));
    };

    function handleLogout() {
        if (window.confirm('Are you sure you want to logout?')) {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    setUser(null);
                })
                .catch((error) => {
                    // An error happened.
                    console.error('Logout Error:', error);
                });
        }
    }


    return (
        <>
            <CssBaseline />
            <AppBar
                position='relative'
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    borderRadius: '40px',
                    marginTop: '1%',
                    fontFamily: 'poppins ',
                }}
            >
                <Toolbar
                    sx={() => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    })}
                >
                    {/* logo and name  */}
                    <AcUnitIcon sx={{ color: 'black' }} />
                    <Link href='/' underline='none' sx={{ color: 'black', fontSize: '1.6rem', marginLeft: '10px' }}>
                        {'HackConnect'}
                    </Link>

                    {/* container for text */}
                    {match ? (
                        <Drawercomp user={user}/>
                    ) : (
                        <>
                            <Container
                                sx={(theme) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '7%',
                                    marginLeft: '3%',
                                })}
                            >
                                <Link href='/Home' underline='hover' color={'black'}>
                                    {'Discover'}
                                </Link>
                                <Link href='/Hackathon' underline='hover' color={'black'}>
                                    {'Find Hackathon'}
                                </Link>
                                <Link href='/Teams' underline='hover' color={'black'}>
                                    {'Find Devs'}
                                </Link>
                            </Container>
                            {user ? (
                                <>
                                    {/* If user is logged in */}
                                    <Button onClick={handleLogout} sx={{ marginLeft: 'auto', background: 'black', borderRadius: '10px' }} variant='contained' size='large'>
                                        Logout
                                    </Button>
                                    {/* Display user's name or icon */}
                                    {developers.length > 0 && (
                                        <>
                                            {developers.map((developer) => {
                                                if (user.email === developer.email) {
                                                    return (

                                                        <Avatar sx={{ marginLeft: '10px', bgcolor: 'black' }}>
                                                            {developer.name[0].toUpperCase()}
                                                        </Avatar>


                                                    );
                                                }
                                                return null;
                                            })}

                                        </>
                                    )}
                                </>
                            ) : (
                                // If user is not logged in
                                <>
                                    <Button sx={{ marginLeft: 'auto', background: 'black', borderRadius: '10px' }} variant='contained' size='large' href='/login'>
                                        Login
                                    </Button>
                                    <Button sx={{ marginLeft: '10px', color: 'black', borderColor: 'black', borderRadius: '10px' }} variant='outlined' size='large' href='/developer'>
                                        SignUP
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
