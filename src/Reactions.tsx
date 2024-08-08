import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Stack } from "@mui/material";
import { Reactions } from './types';

function Reactions (props: Reactions) {
    return (
    <Stack direction='row' spacing={1}>
        <Stack direction='row' alignItems='center'>
            <ThumbUpIcon fontSize='small'sx={{mr: 1}}/>
            {props.likes}
        </Stack>
        <Stack direction='row' alignItems='center'>
            <ThumbDownIcon fontSize='small' sx={{mr: 1}}/>
            {props.dislikes}
            </Stack>
    </Stack>
    )
}

export default Reactions;
//investigate naming conventions(window open in browser)
//and come up with right names for component/data type