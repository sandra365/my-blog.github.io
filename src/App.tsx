import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
      <Stack spacing={4} alignItems='center' position='relative'>
        <Header />
        <Stack sx={{
          '@media (min-width: 900px)': {
            paddingX: 6
          }
        }}>
          <Outlet />
          {/* <Navigate to='/posts' /> */}
        </Stack>
        <Footer />
      </Stack>
  );
}

export default App;

//???rename PostPage to PostView - try to name components close to their UI meanings
//and review other name confusions

//create about page
//add navigation to about page
//add navigation to about via logo

//make comment input accesible by wrapping it in <form>
//fix issue with footer not being sticky to the bottom of the page when loading 

//should I resolve issue with comments keys?

//return to the generics later (you'll understand them one day, no pressure, it's just a hard topic for you)

//and look how far you've gone and how consistent you've been
//it's enough to start looking for a job and be proud of yourself