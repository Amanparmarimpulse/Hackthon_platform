import React from 'react'
import { AppBar, Container, Link, Button, CssBaseline, Toolbar, useMediaQuery,useTheme } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Drawercomp from './Drawer';

function Navbar() {
  
    const theme=useTheme();
    const match=useMediaQuery(theme.breakpoints.down('md'));
    
    return (

        <>
            <CssBaseline></CssBaseline>
            <AppBar position='relative' sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                borderRadius:'40px',
                 marginTop:'1%'          
               
            }}>
                
                <Toolbar  sx={()=>({
                    display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'})} >

                    {/* logo and name  */}
                <AcUnitIcon sx={{color:'black'}}></AcUnitIcon>

                    <Link href="/" underline='none' sx={{color:'black',fontSize:'1.6rem',marginLeft:'10px'}} >
                            {'HackConnect'}
                        </Link>


                    {/* container for text */}

                    {
                        match ? (<Drawercomp></Drawercomp>):(
                            <>
                             <Container sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap:'7%',
                            marginLeft:'3%'
                           
                        })} >
                            <Link href="/Home" underline="hover" color={'black'}>
                                {'Discover'}
                            </Link>
                            <Link href="/Hackathon" underline="hover" color={'black'}>
                                {'Find Hackathon'}
                            </Link>
                            <Link href="/Teams" underline="hover" color={'black'}>
                                {'Make a team'}
                            </Link>
                        </Container>
    
    
                        {/* login and sign up buttons */}
        
                            <Button  sx={{marginLeft:'auto',background:'black',borderRadius:'10px' }}variant="contained" size='large'>Login</Button>
                            <Button  sx={{marginLeft:'10px',color:'black',borderColor:'black',borderRadius:'10px'}}variant="outlined" size='large'>SignUP</Button>
                    </>
                        )
                    }
                   
                    

                </Toolbar>
              
            </AppBar>
        </>
    )
}

export default Navbar