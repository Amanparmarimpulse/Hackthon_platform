import React from 'react';
import Navbar from '../pages/Components/Navbar';
import SearchBar from '../pages/Components/Hackathoncomp/SearchBar';
import Dividercomp from'../pages/Components/Hackathoncomp/Dividercomp';
import { Container, Divider } from '@mui/material';
import Footer from '../pages/Components/Footer';
import Mainsection from '../pages/Components/Hackathoncomp/Mainsection';
import LabTabs from '../pages/Components/Hackathoncomp/TabsClass'

export default function Hackathon() {
  return (
   <>
<Container sx={{padding:'2vh'}}>
 <Navbar></Navbar>
<Dividercomp></Dividercomp>

<Divider sx={{marginTop:'3vh',color:'black'}}></Divider>

<SearchBar></SearchBar>
  <LabTabs></LabTabs>
 
  
  <Mainsection count={100} ></Mainsection>
  </Container>   
<Footer></Footer>


   </>
  )
}
