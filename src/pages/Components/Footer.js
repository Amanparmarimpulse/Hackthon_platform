import { Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <>
  <Container sx={{marginTop:'8%',position:'sticky',paddingBottom:'5%',backgroundColor:'rgb(171,192,231,1)'}}>
        <Grid container sx={{backgroundColor:'transpaernt' }} spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Container>
            <Typography  fontWeight={600} ><b> HackerComp</b></Typography> 
          <br></br>  
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} > About</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Careers</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Contact</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Help</Typography>
          </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Container>
            <Typography  fontWeight={600} ><b> Hackathons</b>  </Typography> 
            <br></br>
          <Link href="/Hackathon" underline='none'sx={{color:'rgb(22,44,89,1)'}} > Browse hackathons
          </Link><br></br>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Create Teams</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Resources</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Search for Teams</Typography>
          </Link>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Container>
            <Typography  fontWeight={600} > <b> Protfolio</b> </Typography>
            <br></br>  
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Your hackathon</Typography>
          </Link>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Your Profile</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >Your Team</Typography>
          </Link>
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Container>
            <Typography  fontWeight={600} ><b> Connect</b> </Typography>  
            <br></br> 
          
      <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} ><LinkedInIcon></LinkedInIcon>Linkedin</Typography> 
          </Link>
          <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} >  <TwitterIcon></TwitterIcon>twitter</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} > <FacebookIcon></FacebookIcon>Facebook</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'rgb(22,44,89,1)'}} ><InstagramIcon></InstagramIcon>Instagram</Typography>
          </Link>
            </Container>
          </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default Footer