import React from 'react';
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
//let rst = false;
function _calculate(v) {
  // if (rst == true) {
  //   _reset();
  //   document.getElementById("answer").value = v
  //   rst = false
  // } else {
    if (document.getElementById("answer").value == 0) {
      document.getElementById("answer").value = v
    } else {
      document.getElementById("answer").value = document.getElementById("answer").value + v
    }
 // }
  return false;
}

function _reset() {
  document.getElementById("answer").value = 0;
  return false;
}

function _delete(v) {
  if (document.getElementById("answer").value != 0) {
    let str = document.getElementById("answer").value;
    document.getElementById("answer").value = str.slice(0, -1);
  }
  return false;
}

function _cal() {
  let answr = eval(document.getElementById("answer").value)
  document.getElementById("answer").value = answr
  // rst = true
  return false;
}


export function Counter() {

  return (
    <div >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ mt: 3 }}>
            <Card variant="outlined" sx={{ maxWidth: 500 }}>
              <CardContent style={{ backgroundColor: '#f5f5f5' }}>
                <Stack direction="column" spacing={4}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="answer"
                      name="answer"
                      inputProps={
                        { readOnly: true, }
                      }
                      defaultValue={0}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _calculate("7")} variant="outlined">7</Button>
                      <Button onClick={() => _calculate("8")} variant="outlined">8</Button>
                      <Button onClick={() => _calculate("9")} variant="outlined">9</Button>
                      <Button onClick={() => _delete("DEL")} variant="contained">DEL</Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _calculate("4")} variant="outlined">4</Button>
                      <Button onClick={() => _calculate("5")} variant="outlined">5</Button>
                      <Button onClick={() => _calculate("6")} variant="outlined">6</Button>
                      <Button onClick={() => _calculate("+")} variant="outlined">+</Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _calculate("1")} variant="outlined">1</Button>
                      <Button onClick={() => _calculate("2")} variant="outlined">2</Button>
                      <Button onClick={() => _calculate("3")} variant="outlined">3</Button>
                      <Button onClick={() => _calculate("-")} variant="outlined">-</Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _calculate(".")} variant="outlined">.</Button>
                      <Button onClick={() => _calculate("0")} variant="outlined">0</Button>
                      <Button onClick={() => _calculate("/")} variant="outlined">/</Button>
                      <Button onClick={() => _calculate("*")} variant="outlined">*</Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack direction="row" spacing={4}>
                      <Button onClick={() => _reset()} variant="contained" color="error">RESET</Button>
                      <Button onClick={() => _cal()} variant="contained" color="success">=</Button>
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


