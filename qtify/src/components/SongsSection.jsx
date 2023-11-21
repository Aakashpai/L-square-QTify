import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    .Mui-selected{
        color: var(--color-white) !important;
        font-size: 1rem;
        font-weight: 600;
    }
    .MuiTab-root{
        color: var(--color-white) !important;
    }
    .MuiTabs-indicator{
        background-color: var(--color-primary)
    }
`

const SongsSection = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <Wrapper>
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  </Box>
    </Wrapper>
  )
}

export default SongsSection