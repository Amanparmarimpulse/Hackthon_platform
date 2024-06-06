import React, { useState } from 'react';
import axios from 'axios'; 
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import {useMediaQuery,useTheme } from '@mui/material'
import Navbar from './Components/Navbar';
// import "./Developer_profile.css"
import Image from './Components/loginimg.jpeg'
const DeveloperProfile = () => {
    const [name, setName] = useState('');
   
    const [email, setEmail] = useState('');
    
  

   
    const handleSubmit = async (e) => {
      e.preventDefault();

      axios.post('http://localhost:3001/developer',{name,email})
      .then(result => console.log(result))
      .catch(err=> console.log(err))
  };
  const theme=useTheme();
  const match=useMediaQuery(theme.breakpoints.down('md'));
 
    return (
        <>
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',background:'white',height:'100vh',width:'100vw',flexDirection:match?'column':'row',overflowX:'hidden',boxSizing:'border-box'}}>
          {!match && <Container sx={{
           backgroundImage: `url(${Image})`,
           zIndex:'1',
           height:match?'100%':"80%",
           width:match?'100%':'80%',
           backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop:match?'1%':'9%',
          paddingTop:match?'1%':'0',
                marginLeft:'8%'
           }}>
         
           </Container>}
           <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',background:'rgb(71, 101, 216)',height:'100vh',fontFamily:'poppins',fontSize:'1.3rem',width:'100vw',color:'white',marginLeft:'10%'}}><Container sx={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{fontWeight:'bold',fontSize:'2rem',fontFamily:'poppins',marginBottom:'2%'}}>Login </Typography>
            <form onSubmit={handleSubmit}>
                <Container >
                    <label>Your Name:</label> <br/>
                    <TextField sx={{width:'60%',borderRadius:'7px',
                    backgroundColor:'white',
                    textAlign:'center'
                    }
                    } variant='filled' size='small' type="text" margin='dense'required value={name} onChange={(e) => setName(e.target.value)}  />
                </Container>
                <Container >
                    <label>Enter Password:</label> <br/>
                    <TextField sx={{width:'60%',borderRadius:'7px',
                    backgroundColor:'white',
                    textAlign:'center'
                    }
                    } variant='filled' size='small' type="text" margin='dense'requiredtype="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Container>

                
                <Container className="form-group">
                
                    <label>Developer Email ID for contact:</label> <br/>
                    <TextField sx={{width:'60%',borderRadius:'7px',
                    backgroundColor:'white',
                    textAlign:'center'
                    }
                    } variant='filled' size='small' margin='dense' required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Container>

                

                <Button type="submit" sx={{backgroundColor:'white',marginTop:'5%',marginLeft:'3%',width:'30%',borderRadius:'30px',height:'14%','&:hover': {
      backgroundColor: 'lightgrey', 
    },}}><Typography sx={{fontWeight:'bold',fontFamily:'poppins !important'}}>Submit</Typography></Button>
            </form>
            </Container>
        </Container>
        </Box>
        </>
    );
}

export default DeveloperProfile;
