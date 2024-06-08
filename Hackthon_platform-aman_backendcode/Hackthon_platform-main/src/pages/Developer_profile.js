import React, { useState } from 'react';
import axios from 'axios'; 
import {  useNavigate } from 'react-router-dom';
import { Box, Button, Container, CssBaseline, Typography, TextField } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Components/Navbar';
import Image from './Components/loginpageimg.jpeg';
import CloseIcon from '@mui/icons-material/Close';
import { auth } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";

const DeveloperProfile = () => {
    console.log(auth);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [skills, setSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleCredentials = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "location") setLocation(value);
        if (name === "gender") setGender(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSkillsChange = (e) => {
        setSelectedSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (selectedSkill && !skills.includes(selectedSkill)) {
            setSkills([...skills, selectedSkill]);
            setSelectedSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('signup');

      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          
          // After successful signup, send data to your server
          axios.post('http://localhost:3001/developer', { name, email, location, gender, bio, skills })
              .then(result => console.log(result))
              .catch(err => console.log(err));

              navigate('/home');
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);

          if (errorCode === 'auth/invalid-email') {
              setEmailError(errorMessage);
          } else if (errorCode === 'auth/weak-password') {
              setPasswordError(errorMessage);
          }
      }
  };

    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));

    const selectStyle = {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '10px',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        width: '60%',
        marginTop: '10px',
        fontSize: '16px',
        fontFamily: 'Poppins, sans-serif',
    };

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgb(71, 101, 216)',
                height: '100vh',
                width: '100vw',
                flexDirection: match ? 'column' : 'row',
                overflowX: 'hidden',
                boxSizing: 'border-box'
            }}>
                {!match && <Container sx={{
                    backgroundImage: `url(${Image})`,
                    zIndex: '1',
                    height: match ? '100%' : "80%",
                    width: match ? '100%' : '80%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginTop: match ? '1%' : '9%',
                    paddingTop: match ? '1%' : '0',
                    marginLeft: '8%'
                }}>
                </Container>}
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgb(71, 101, 216)',
                    height: '100vh',
                    fontFamily: 'poppins',
                    fontSize: '1.3rem',
                    width: '100vw',
                    color: 'white',
                    marginLeft: '10%'
                }}>
                    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'poppins', marginBottom: '2%' }}>SignUP</Typography>
                        <form onSubmit={handleSubmit}>
                            <Container >
                                <label>Your Name:</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        fontSize: '1.3rem',
                                    }}
                                    InputProps={{
                                        style: { height: "50px" },
                                    }}
                                    variant='filled'
                                    size='small'
                                    type='text'
                                    margin='dense'
                                    required
                                    name="name"
                                    value={name}
                                    onChange={handleCredentials} />
                            </Container>
                            <Container className="form-group">
                                <label>Where are you based?:</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        fontSize: '1.3rem',
                                    }}
                                    InputProps={{
                                        style: { height: "50px" },
                                    }}
                                    variant='filled'
                                    size='small'
                                    type='text'
                                    margin='dense'
                                    required
                                    name="location"
                                    value={location}
                                    onChange={handleCredentials} />
                            </Container>
                            <Container className="form-group">
                                <label>Your Bio:</label> <br />
                                <textarea style={{ 'width': '60%', 'borderRadius': '7px', 'border': 'solid white' }
                                } value={bio} onChange={(e) => setBio(e.target.value)} />
                            </Container>
                            <Container className="form-group">
                                <label>Gender Identity:</label> <br />
                                <select name="gender" value={gender} onChange={handleCredentials} style={selectStyle}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </Container>
                            <Container className="form-group">
                                <label>Developer Email ID for contact:</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        fontSize: '1.3rem',
                                    }}
                                    InputProps={{
                                        style: { height: "50px" },
                                    }}
                                    variant='filled'
                                    size='small'
                                    margin='dense'
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleCredentials} />
                            </Container>
                            <Container className="form-group">
                                <label>Password</label> <br />
                                <TextField
                                    sx={{
                                        width: '60%',
                                        borderRadius: '7px',
                                        backgroundColor: 'white',
                                        fontSize: '1.3rem',
                                    }}
                                    InputProps={{
                                        style: { height: "50px" },
                                    }}
                                    variant='filled'
                                    size='small'
                                    margin='dense'
                                    required
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleCredentials} />
                            </Container>
                            <Container className="skills-container">
                                <Typography variant='h6'>Add Skills</Typography>
                                <select value={selectedSkill} onChange={handleSkillsChange} style={selectStyle}>
                                    <option value="">Select Skill</option>
                                    <option value="ai_ml">AI/ML</option>
                                    <option value="fullstack">Fullstack Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="react">React Developer</option>
                                    <option value="backend">Backend Developer</option>
                                </select>
                                <Button type="button" onClick={handleAddSkill} sx={{
                                    backgroundColor: 'white',
                                    width: '20%',
                                    height: '10%',
                                    '&:hover': {
                                        backgroundColor: 'lightgrey'
                                    }, marginLeft: '3%'
                                }}>
                                    <Typography sx={{ fontFamily: 'poppins !important' }}>Add Skill</Typography>
                                </Button>
                                <Container className="selected-skills">
                                    {skills.map((skill, index) => (
                                        <Container key={index} className="skill" sx={{}}>
                                            <span>{skill}</span>
                                            <Button type="button" onClick={() => handleRemoveSkill(skill)} sx={{}}><CloseIcon sx={{ color: 'white' }}></CloseIcon></Button>
                                        </Container>
                                    ))}
                                </Container>
                            </Container>
                            <Button type="submit"  sx={{
                                backgroundColor: 'white', marginTop: '6%', marginLeft: '3%', width: '20%', borderRadius: '30px', height: '10%', '&:hover': {
                                    backgroundColor: 'lightgrey',
                                },
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins !important' }}>Submit</Typography>
                            </Button>
                            <Button type="submit" href="/login" sx={{
                                backgroundColor: 'white', marginTop: '6%', marginLeft: '3%', width: '20%', borderRadius: '30px', height: '10%', '&:hover': {
                                    backgroundColor: 'lightgrey',
                                },
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins !important' }}>Login</Typography>
                            </Button>
                               <br/>
                            {emailError && <Typography sx={{ color: 'red' }}>{emailError}</Typography>}
            {passwordError && <Typography sx={{ color: 'red' }}>{passwordError}</Typography>}
                        </form>
                    </Container>
                </Container>
            </Box>
        </>
    );
}

export default DeveloperProfile;
