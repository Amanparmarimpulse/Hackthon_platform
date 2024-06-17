import React from 'react';
import Navbar from '../pages/Components/Navbar';

import Dividercomp from'../pages/Components/Hackathoncomp/Dividercomp';
import { Container, Divider } from '@mui/material';
import Footer from '../pages/Components/Footer';
import Mainsection from '../pages/Components/Hackathoncomp/Mainsection';

import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 183, 3, 0.8)',
  color: 'black',
  '&:hover': {
    backgroundColor: 'lightgrey',
    color: 'black',
  },
  marginLeft: "20%",
 
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function Hackathon() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    
      <Navbar />
      <Dividercomp />

      <Divider sx={{ marginTop: '3vh', color: 'black' }} />
      <Container sx={{ marginTop: '3vh', color: 'black', overflowX: 'hidden' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm} // Add value prop and set it to searchTerm
  onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Search>
      </Container>

      <Container sx={{ marginTop: '3vh', overflowX: 'hidden' }}>
        <Mainsection count={100} query={searchTerm}/>
      </Container>

      <Footer />
    </>
  );
}

