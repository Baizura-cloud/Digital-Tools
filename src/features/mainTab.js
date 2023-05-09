import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Counter} from './counter/Counter'
import Coversion from './conversion/conversion';
import Container from '@mui/material/Container';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function MainTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container component="main" >
    <Box
      sx={{ flexGrow: 0, bgcolor: 'background.paper', display: 'flex', height: 600 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Calculator" {...a11yProps(0)} />
        <Tab label="Currency Conversion" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Counter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Coversion />
      </TabPanel>
    </Box>
    </Container>
  );
}
