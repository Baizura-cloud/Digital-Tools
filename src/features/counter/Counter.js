import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export function Counter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Card variant="outlined" sx={{ maxWidth: 500 }}>
                <CardContent style={{backgroundColor: '#f5f5f5'}}>
                    <Stack direction="column" spacing={4}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="answer"
                          name="answer"
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <Stack direction="row" spacing={4}>
                          <Button variant="outlined">7</Button>
                          <Button variant="outlined">8</Button>
                          <Button variant="outlined">9</Button>
                          <Button variant="contained">DEL</Button>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} >
                        <Stack direction="row" spacing={4}>
                          <Button variant="outlined">4</Button>
                          <Button variant="outlined">5</Button>
                          <Button variant="outlined">6</Button>
                          <Button variant="outlined">+</Button>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} >
                        <Stack direction="row" spacing={4}>
                          <Button variant="outlined">1</Button>
                          <Button variant="outlined">2</Button>
                          <Button variant="outlined">3</Button>
                          <Button variant="outlined">-</Button>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} >
                        <Stack direction="row" spacing={4}>
                          <Button variant="outlined">.</Button>
                          <Button variant="outlined">0</Button>
                          <Button variant="outlined">/</Button>
                          <Button variant="outlined">*</Button>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} >
                        <Stack direction="row" spacing={4}>
                          <Button variant="contained" color="error">RESET</Button>
                          <Button variant="contained" color="success">=</Button>

                        </Stack>
                      </Grid>
                    </Stack>
                </CardContent>
              </Card>
            </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
