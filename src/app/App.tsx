import React from 'react';
import '../css/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

function App() {
  return <Container sx={{ backgroundColor: 'orange' }}>
    <Stack flexDirection="column">
      <Box sx={{my: 2}}>
        <Typography variant="h4" component={"h4"}>Hello World</Typography>
      </Box>
      <Button variant="contained">Contained</Button>
    </Stack>
  </Container>
}

export default App;
