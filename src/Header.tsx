import { Stack } from '@mui/material';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Stack
            width='100%'
            direction='row' 
            alignItems='center' 
            justifyContent='flex-start'
            spacing={2}
            position='sticky'
            top={0}
            zIndex={100}
            bgcolor='#e3f2fd'
            sx={{
                boxSizing: 'border-box',
                '@media (max-width: 599px)': {
                    paddingY: 1,
                    paddingLeft: 2.5
                },
                '@media (min-width: 600px)': {
                    paddingY: 2,
                    paddingLeft: 5
                }
            }}
        >
            <Link to='posts' style={{textDecoration: 'none'}}>
                <MaterialLink variant='h2' component='h1' underline='none' color='#000'>
                    My blog
                </MaterialLink>
            </Link>
            <Link to='posts' style={{textDecoration: 'none'}}>
                <MaterialLink variant='h5' component='h6' underline='hover' color='#000'>
                    posts
                </MaterialLink>
            </Link>
            <Link to='about' style={{textDecoration: 'none'}}>
                <MaterialLink variant='h5' component='h6' underline='hover' color='#000'>
                    about
                </MaterialLink>
            </Link>
        </Stack>
    );
}

export default Header;
