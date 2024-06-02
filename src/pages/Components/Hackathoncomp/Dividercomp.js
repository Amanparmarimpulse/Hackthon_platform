import { Container, Typography } from '@mui/material'
import React from 'react'

function Dividercomp() {
  return (
    <>
<Container sx={{height:150, backgroundColor:'rgba(23, 44, 87, 1)',marginTop:'5vh',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'
}}>
    <Typography sx={{
        fontSize:'2rem' ,fontWeight:'2rem',color:'white'
    }}>
        Find The best <b>Hackathons</b> Here!!!
    </Typography>
</Container>
    </>
  )
}

export default Dividercomp