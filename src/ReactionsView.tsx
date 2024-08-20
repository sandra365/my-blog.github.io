import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Stack, Typography } from "@mui/material";
import { Reactions as ReactionsData } from './types';

function ReactionsView (props: ReactionsData) {
    return (
    <Stack direction='row' spacing={1} pb={1}>
        <Stack direction='row' alignItems='center'>
            <ThumbUpIcon fontSize='small'sx={{mr: 1}}/>
            <Typography variant='body1'>
                {props.likes}
            </Typography>
        </Stack>
        <Stack direction='row' alignItems='center'>
            <ThumbDownIcon fontSize='small' sx={{mr: 1}}/>
            <Typography variant='body1'>
                {props.dislikes}
            </Typography>
            </Stack>
    </Stack>
    );
}

export default ReactionsView;
