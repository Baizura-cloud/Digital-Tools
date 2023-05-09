import React from 'react';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import History from '../history';

const theme = createTheme();


export default function Conversion() {


  return (
    <div >
      <ThemeProvider theme={theme}>
       
          <CssBaseline />
          <Box >
            <Stack direction="row" spacing={2}>
              <Card sx={{ maxWidth: 500 }}>
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
                   
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Box>
      </ThemeProvider>
    </div>
  );
}


