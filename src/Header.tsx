import { Stack, Typography } from '@mui/material';
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
            bgcolor='#e3f2fd'
            sx={{
                zIndex: '100',
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
            <Typography variant='h2' component='h1'> My blog </Typography>
            <Link to='posts' style={{textDecoration: 'none'}}>
                <MaterialLink variant='h5'component='h6' underline='hover' color='#000'>
                    posts
                </MaterialLink>
            </Link>
            <Link to='' style={{textDecoration: 'none'}}>
                <MaterialLink variant='h5' component='h6' underline='hover' color='#000'>
                    about
                </MaterialLink>
            </Link>
        </Stack>
    );
}

export default Header;
