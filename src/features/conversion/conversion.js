import React from 'react';
import {useEffect, useState} from 'react';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme();


export default function Conversion() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box >
          <Stack direction="row" spacing={2}>
            <Card sx={{ maxWidth: 800, minWidth: 500 }}>
              <CardContent style={{ backgroundColor: '#f5f5f5' }}>
                <Stack direction="column" spacing={4}>
                  <Grid item xs={12}>
                    <Stack direction="row" spacing={4}>
                    <TextField
                      id="answer"
                      name="answer"
                      type="number"
                      label="Amount"
                    />
                    <InputLabel id="demo-simple-select-label" >From</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      sx={{ minWidth: 150 }}
                    >
                      <MenuItem value={10}>TenTenTenTenTenTenTen</MenuItem>
                      <MenuItem value={20}>TenTenTenTenTenTenTenTen</MenuItem>
                      <MenuItem value={30}>TenTenTenTenTenTenTenTen</MenuItem>
                    </Select>
                    <InputLabel  id="demo-simple-select-label" >To</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      sx={{ minWidth: 150 }}
                    >
                      <MenuItem value={10}>TenTenTenTenTenTenTen</MenuItem>
                      <MenuItem value={20}>TenTenTenTenTenTenTenTen</MenuItem>
                      <MenuItem value={30}>TenTenTenTenTenTenTenTen</MenuItem>
                    </Select>
                    </Stack>
                    
                  </Grid>
                  <Stack direction="row" spacing={4}>
                    <TextField
                      id="answer"
                      name="answer"
                      type="number"
                      inputProps={
                        { readOnly: true, }
                      }
                      label="Converted Amount"
                    />
                    </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </ThemeProvider>
    </div>
  );
}


