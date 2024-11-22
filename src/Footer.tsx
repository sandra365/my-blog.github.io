import { Stack, Typography } from "@mui/material";

function Footer() {
    return (
        <Stack 
            width='100%'
            alignItems='center' 
            justifyContent='center'
            bgcolor='#90caf9'
            sx={{
                boxSizing: 'border-box',
                '@media (max-width: 599px)': {
                    padding: 2
                },
                '@media (min-width: 600px)': {
                    padding: 4
                }
            }}
        >
            <Typography variant='body1'>
                Oleksandra Hrabovska
                2024
            </Typography>
        </Stack>
    ); 
}

export default Footer;