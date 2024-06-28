import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid, TextField, Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileCards = (props) => {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  useEffect(() => {
    fetch('https://hackthon-platform-2.onrender.com/developers')
      .then(response => response.json())
      .then(data => {
        setDevelopers(data);
        console.log('Data successfully fetched:', data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);


  const handleButtonClick = (email) => {
    {console.log(email)}
    navigate('/sendinvite', { state: { developerEmail: email } });
  };


  const handleExpandClick = (id) => {
    setExpanded(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredDevelopers = developers.filter(developer => {
    return developer.name.toLowerCase().includes(searchQuery) ||
      developer.skills.some(skill => skill.toLowerCase().includes(searchQuery));
  });


  const limitedDevelopers = filteredDevelopers.slice(0, props.count);

  return (
    <div style={{ margin: isSmallScreen ? "1%" : "2%" }}>
      <Box sx={{ marginBottom: isSmallScreen ? "1rem" : "2%" }}>
        <TextField
          label="Search by name or skill"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ 
            borderRadius: '40px',
            '& .MuiInputLabel-root': {
              fontSize: isSmallScreen ? '0.8rem' : '1rem',
            },
            '& .MuiInputBase-input': {
              fontSize: isSmallScreen ? '0.9rem' : '1rem',
            }
          }}
        />
      </Box>
      <Grid container spacing={isSmallScreen ? 2 : 3}>
        {limitedDevelopers.map(developer => (
          <Grid item xs={12} sm={12} md={props.size} key={developer._id}>
            <Card
              sx={{
                width: '100%',
                borderRadius: '15px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: isSmallScreen ? 'none' : 'scale(1.05)',
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
                },
                padding: isSmallScreen ? "0.5em" : "1em",
                fontFamily: 'poppins',
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(2, 48, 71, 1)',
                      width: isSmallScreen ? 30 : 40,
                      height: isSmallScreen ? 30 : 40,
                    }}
                    aria-label="recipe"
                  >
                    {developer.name[0].toUpperCase()}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography variant={isSmallScreen ? "h6" : "h5"}>
                    {developer.name}
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  color="text.secondary"
                  sx={{ 
                    fontSize: isSmallScreen ? '0.9rem' : '1.3rem', 
                    marginLeft: isSmallScreen ? '2%' : '5%' 
                  }}
                >
                  {developer.skills.join(', ')}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ 
                    textTransform: 'none', 
                    marginLeft: "2%", 
                    marginBottom: '1%', 
                    background: "blue",
                    fontSize: isSmallScreen ? '0.7rem' : '0.875rem',
                    padding: isSmallScreen ? '4px 8px' : '6px 16px',
                  }}
                  onClick={() => handleButtonClick(developer.email)}
                >
                  Send Request
                </Button>
                <IconButton aria-label="share" size={isSmallScreen ? "small" : "medium"}>
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded[developer._id]}
                  onClick={() => handleExpandClick(developer._id)}
                  aria-expanded={expanded[developer._id]}
                  aria-label="show more"
                  size={isSmallScreen ? "small" : "medium"}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded[developer._id]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography sx={{ fontSize: isSmallScreen ? '0.8rem' : '1rem' }}>
                    Gender: {developer.gender}
                    <br />
                    About: {developer.bio}
                    <br />
                    Location: {developer.location}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProfileCards;
