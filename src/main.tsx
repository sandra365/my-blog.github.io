import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Feed from './Feed.tsx';
import PostPage from './PostPage.tsx';
import NotFound from './NotFound.tsx';
import About from './About.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>} >
        <Route path='/posts' element={<Feed/>} />
        <Route path='/posts/:postId' element={<PostPage/>} />
        <Route path='/about' element={<About/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </>
 )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
