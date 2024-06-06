import { Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <>
  <div style={{marginTop:'8%',position:'sticky',paddingBottom:'5%',backgroundColor:'rgb(0, 53, 102)' , color:'white',paddingTop:'10%'}}>
        <Grid container sx={{backgroundColor:'transpaernt',marginLeft:'17%' }} spacing={6}>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container sx={{color:'white'}}>
             
         
          <Typography  fontWeight={600} ><b> HackerComp</b></Typography> 
          <br></br> 
          <Link underline='none'> <Typography sx={{color:'white'}} > About</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'white'}} >Careers</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'white'}} >Contact</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'white'}} >Help</Typography>
          </Link>
        
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}></Container>
            <Typography  fontWeight={600} ><b> Hackathons</b>  </Typography> 
            <br></br>
          <Link href="/Hackathon" underline='none'sx={{color:'white'}} > Browse hackathons
          </Link><br></br>
          <Link underline='none'> <Typography sx={{color:'white'}} >Create Teams</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'white'}} >Resources</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'white'}} >Search for Teams</Typography>
          </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Typography  fontWeight={600} > <b> Protfolio</b> </Typography>
            <br></br>  
          <Link underline='none'> <Typography sx={{color:'white'}} >Your hackathon</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'white'}} >Your Profile</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'white'}} >Your Team</Typography>
          </Link>
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Typography  fontWeight={600} ><b> Connect</b> </Typography>  
            <br></br> 
          
      <Link underline='none'> <Typography sx={{color:'white'}} ><LinkedInIcon></LinkedInIcon>Linkedin</Typography> 
          </Link>
          <Link underline='none'> <Typography sx={{color:'white'}} >  <TwitterIcon></TwitterIcon>twitter</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'white'}} > <FacebookIcon></FacebookIcon>Facebook</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'white'}} ><InstagramIcon></InstagramIcon>Instagram</Typography>
          </Link>
            </Container>
          </Grid>
        </Grid>
        </div>
    </>
  )
}

export default Footer