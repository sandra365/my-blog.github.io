import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
      <Stack spacing={4} alignItems='center'>
        <Header />
        <Stack>
          <Outlet />
          {/* <Navigate to='/posts' /> */}
        </Stack>
      </Stack>
  );
}

export default App;

/*
semantic elements with MUI:create <Header />(done) and <Footer /> 
as separate components and unclude them in  <App /> along with <Outlet />
*/