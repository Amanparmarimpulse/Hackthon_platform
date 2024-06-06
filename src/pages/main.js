import React from 'react';
import Navbar from './Components/Navbar';

import Midsection from './Components/Midsection';

import { Container, Divider } from '@mui/material';
import DoubleCards from './Components/DoubleCards';
import Footer from './Components/Footer';
import LayeredCards from './Components/LayeredCards';
import Mainsection from './Components/Hackathoncomp/Mainsection';

export default function Main() {
  return (
   <>
    

 <Navbar></Navbar>
<Midsection></Midsection>
<Divider sx={{marginTop:'3vh',color:'black'}}></Divider>

<Container  sx={{width:'50%'}}>
<Mainsection count={5}></Mainsection>
</Container>
 
  
  
  <DoubleCards ></DoubleCards>
<LayeredCards></LayeredCards>
<Footer></Footer>




   </>
  )
}
