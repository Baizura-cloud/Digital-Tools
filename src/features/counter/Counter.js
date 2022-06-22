import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Card variant="outlined" sx={{ maxWidth: 500 }}>
                <CardContent style={{backgroundColor: '#f5f5f5'}}>
                  {/* <Grid container > */}
                    <Stack direction="column" spacing={4}>
                      <Grid item xs={12}>
                        <TextField
                          required
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

                  {/* </Grid> */}
                </CardContent>
              </Card>


              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button> */}
              {/* <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
        </Container>
      </ThemeProvider>
      {/* <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => dispatch(decrement())} >-</Button>
          <span >{count}</span>
          <Button variant="outlined" onClick={() => dispatch(increment())} >+</Button>
        </Grid>
        <Grid item xs={2}>
          <TextField id="outlined-basic" variant="outlined" value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" onClick={() => dispatch(incrementByAmount(incrementValue))} >Add Amount</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" onClick={() => dispatch(incrementAsync(incrementValue))} >Add Async</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" onClick={() => dispatch(incrementIfOdd(incrementValue))} >Add If Odd</Button>
        </Grid>
      </Grid> */}
    </div>
  );
}
