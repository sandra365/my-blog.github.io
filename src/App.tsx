import { Box, Stack, Typography } from '@mui/material';
import Feed from './Feed';

function App() {
  return (
      <Stack spacing={4} alignItems='center'>
        <Typography variant='h1'> My blog </Typography>
        <Box><Feed/></Box>
      </Stack>
  );
}

export default App;
