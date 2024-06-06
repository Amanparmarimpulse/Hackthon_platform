import React, { useState } from 'react';
import axios from 'axios'; 
import { Box, Button, Container, CssBaseline, Typography,TextField } from '@mui/material';
import {useMediaQuery,useTheme } from '@mui/material'
import Navbar from './Components/Navbar';
// import "./Developer_profile.css"
import Image from './Components/loginpageimg.jpeg'
import CloseIcon from '@mui/icons-material/Close';
const DeveloperProfile = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [skills, setSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('');

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

      axios.post('http://localhost:3001/developer',{name,email,location,gender,bio,skills})
      .then(result => console.log(result))
      .catch(err=> console.log(err))
  };
  const theme=useTheme();
  const match=useMediaQuery(theme.breakpoints.down('md'));
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
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',background:'rgb(71, 101, 216)',height:'100vh',width:'100vw',flexDirection:match?'column':'row',overflowX:'hidden',boxSizing:'border-box'}}>
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
            <Typography sx={{fontWeight:'bold',fontSize:'2rem',fontFamily:'poppins',marginBottom:'2%'}}>SignUP</Typography>
            <form onSubmit={handleSubmit}>
                <Container >
                    <label>Your Name:</label> <br/>
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
    value={name}
    onChange={(e) => setName(e.target.value)} />
                </Container>
                <Container className="form-group">
                    <label>Where are you based?:</label> <br/>
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
    
  value={location} onChange={(e) => setLocation(e.target.value)} />
                </Container>
                <Container className="form-group">
                    <label>Your Bio:</label> <br/>
                    <textarea style={{'width':'60%','borderRadius':'7px','border':'solid white'
                        }
                    }  value={bio} onChange={(e) => setBio(e.target.value)} />
                </Container>
                <Container className="form-group">
                    <label>Gender Identity:</label> <br/>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle
                    }>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </Container>

                
                <Container className="form-group">
                
                    <label>Developer Email ID for contact:</label> <br/>
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
    required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <Button type="button" onClick={handleAddSkill} sx={{backgroundColor:'white',width:'20%',height:'10%','&:hover': {
      backgroundColor: 'lightgrey'
    }, marginLeft:'3%'}}><Typography sx={{fontFamily:'poppins !important'}}>Add Skill</Typography></Button>
                    <Container className="selected-skills">
                        {skills.map((skill, index) => (
                            <Container key={index} className="skill" sx={{}}>
                                <span>{skill}</span>
                                <Button type="button" onClick={() => handleRemoveSkill(skill)} sx={{}}><CloseIcon sx={{color:'white'}}></CloseIcon></Button>
                            </Container>
                        ))}
                    </Container>
                </Container>

                <Button type="submit" sx={{backgroundColor:'white',marginTop:'6%',marginLeft:'3%',width:'20%',borderRadius:'30px',height:'10%','&:hover': {
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
