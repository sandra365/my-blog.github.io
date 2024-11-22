import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
      <Stack spacing={4} alignItems='center' justifyContent='space-between' position='relative' height='100vh'>
        <Header />
        <Stack sx={{
          '@media (min-width: 900px)': {
            paddingX: 6
          }
        }}>
          <Outlet />
          <Navigate to='/posts' />
        </Stack>
        <Footer />
      </Stack>
  );
}

export default App;

//fill in about page: just tell a little bit about the project (technologies used for reasons why)
//make comment input accesible by wrapping it in <form>/what to do with overall accessibility
//what was wrong with navigate to posts?

//return to the generics later (you'll understand them one day, no pressure, it's just a hard topic for you)
//and look how far you've gone and how consistent you've been
//it's enough to start looking for a job and be proud of yourself

//function names should start with a verb

// Testing my app:
// 1. Install Jest
// 2. Install React Testing Library
// 3. Configure them
// 4. Run basic test to check everything works

// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };
