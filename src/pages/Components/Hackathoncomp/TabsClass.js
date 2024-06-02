import * as React from 'react';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import data from '../../../';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typographys: 'body1' ,display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'rgba(23, 44, 87, 1)'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Item One" value="1"  sx={{color:'rgba(23, 44, 87, 1)'}}/>
            <Tab label="Item Two" value="2"  sx={{color:'rgba(23, 44, 87, 1)'}}/>
            <Tab label="Item Three" value="3"  sx={{color:'rgba(23, 44, 87, 1)'}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{color:'rgba(23, 44, 87, 1)'}}>Item One</TabPanel>
        <TabPanel value="2" sx={{color:'rgba(23, 44, 87, 1)'}}>Item Two</TabPanel>
        <TabPanel value="3" sx={{color:'rgba(23, 44, 87, 1)'}}>Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
