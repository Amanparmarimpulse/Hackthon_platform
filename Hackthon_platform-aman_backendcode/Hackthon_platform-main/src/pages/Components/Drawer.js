import React from 'react'
import { Drawer ,Link,Button, IconButton, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function Drawercomp() {
    const [open,setOpen]=React.useState(false);
    
  
  return (
  
    <>
    <Drawer open={open} onClose={()=>setOpen(false)}  sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:'240px' },
            marginLeft:'10px'
          }}
          anchor='right'>
            
    <Link href="#" underline="/Home" color={'black'} sx={{padding:'10px',marginTop:'30px'}}>
                            {'Discover'} 
                      
                        </Link>
                        <Link href="/Hackathon" underline="hover" color={'black'} sx={{padding:'10px'}}>
                            {'Find Hackathon'}
                        </Link>
                        <Link href="/Teams" underline="hover" color={'black'} sx={{padding:'10px'}}>
                            {'Find Devs'}
                        </Link>
                   

                    <Divider sx={{marginTop:'10px', tabSize:''}} />
                    {/* login and sign up buttons */}
    
                        <Button  variant="contained" sx={{margin:'10px', marginTop:'30px',boxSizing:'border-box',background:'black',borderRadius:'10px'}}>Login</Button>
                        <Button  variant="outlined" sx={{margin:'10px', color:'black',borderRadius:'10px' ,borderColor:'black'}}>SignUP</Button>
                  
    </Drawer>
    <IconButton onClick={()=>setOpen(!open)}>
       <MenuIcon></MenuIcon>
    </IconButton>
</>
  )
}

export default Drawercomp