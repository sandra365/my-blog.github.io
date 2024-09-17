import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack, Typography } from "@mui/material";

interface CommentFormProps {
    commentAuthor: string;
    commentText: string;
}

function CommentForm (props: CommentFormProps) {
    return(
        <Stack py={1}>
            <Stack flexDirection='row' pb={.25}>
                <AccountCircleIcon sx={{mr: .5}}/>
                <Typography variant='subtitle1'>
                    {props.commentAuthor}
                </Typography>
            </Stack>
            <Typography variant='body1'>
                {props.commentText}
            </Typography>
        </Stack>
    );
}

export default CommentForm;
