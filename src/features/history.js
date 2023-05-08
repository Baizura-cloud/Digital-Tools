import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function History({ history }) {
    
    return (
        <Card sx={{ minWidth: 275 , minHeight: 200}}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    History
                </Typography>
                {history.map(history => (
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {history.answr}
                    </Typography>
                ))}
            </CardContent>

        </Card>
    );
}
