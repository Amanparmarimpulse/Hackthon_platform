import React from 'react';
import { Drawer, Link, Button, IconButton, Divider, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Drawercomp(props) {
  const [open, setOpen] = React.useState(false);
  const user = props.user;
  const developers = props.developers || [];

  return (
    <>
      <IconButton
        edge="end"
        color="black"
        aria-label="menu"
        onClick={() => setOpen(!open)}
        sx={{ display: { xs: 'block', sm: 'block' }, marginLeft: '10px' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '240px',
          },
        }}
      >
        <List>
          <ListItem button component={Link} href="/">
            <ListItemText primary="Discover" />
          </ListItem>
          <ListItem button component={Link} href="/Hackathon">
            <ListItemText primary="Find Hackathon" />
          </ListItem>
          <ListItem button component={Link} href="/Teams">
            <ListItemText primary="Find Devs" />
          </ListItem>
          <Divider />
          {user ? (
            <>
              <ListItem button component={Button} onClick={() => {/* Add your logout logic here */}}>
                <ListItemText primary="Logout" />
              </ListItem>
              <ListItem>
                {developers.length > 0 && (
                  <List>
                    {developers.map((developer) => {
                      if (user.email === developer.email) {
                        return (
                          <ListItem key={developer.email}>
                            <Button>
                              {developer.name[0].toUpperCase()}
                            </Button>
                          </ListItem>
                        );
                      }
                      return null;
                    })}
                  </List>
                )}
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button component={Button} href="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={Button} href="/developer">
                <ListItemText primary="SignUp" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
}

export default Drawercomp;
