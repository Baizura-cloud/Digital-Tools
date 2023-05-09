import React from 'react';
import { useEffect, useState } from 'react';
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
import axios from 'axios';
import Button from '@mui/material/Button';

const theme = createTheme();


export default function Conversion() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('myr');
  const [rate, setRate] = useState('')

  // useEffect(() => {
  //   axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json')
  //     .then((response) => {
  //       setRate(response.data)
  //     })
  // }, [])

  const changeFrom = (event) => {
    setFrom(event.target.value);
  };
  const changeTo = (event) => {
    setTo(event.target.value);
  }

  function _callRate() {
    try {
      axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`)
        .then((response) => {
          setRate(response.data)
          calculateConvert()
        })
    } catch (error) {
        alert("invalid data")
    }
  }

  function calculateConvert(){
    console.log(rate[to])
    const currentRate = rate[to];
    const amount = document.getElementById('amount').value;
    var convert = currentRate*amount;
    document.getElementById('convAnswer').value = convert
  }

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
                        id="amount"
                        name="amount"
                        type="number"
                        label="Amount"
                      />
                      <InputLabel id="demo-simple-select-label" >From</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="From"
                        onChange={changeFrom}
                        sx={{ minWidth: 150 }}
                      >

                        <MenuItem value={"usd"}>usd</MenuItem>
                        <MenuItem value={"myr"}>myr</MenuItem>
                        <MenuItem value={"sgd"}>sgd</MenuItem>
                      </Select>
                      <InputLabel id="demo-simple-select-label" >To</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={to}
                        label="To"
                        onChange={changeTo}
                        sx={{ minWidth: 150 }}
                      >
                        <MenuItem value={"usd"}>usd</MenuItem>
                        <MenuItem value={"myr"}>myr</MenuItem>
                        <MenuItem value={"sgd"}>sgd</MenuItem>
                      </Select>
                    </Stack>

                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _callRate()} variant="contained" color="success">Convert</Button>
                      <TextField
                        id="convAnswer"
                        name="convAnswer"
                        type="number"
                        inputProps={
                          { readOnly: true, }
                        }
                      />
                    </Stack>
                  </Grid>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </ThemeProvider>
    </div>
  );
}


