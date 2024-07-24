import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Reactions } from './types';
import { cropPostBody, formatTitle } from './utils';
import TagList from './TagList';
import { Button, Grid, Stack, Typography } from '@mui/material';

interface PostProps {
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
}

function PostCard(props:PostProps) {
    const postTitle = formatTitle(props.title);
    const postBodyPreview = cropPostBody(props.body);
    
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='h5' component='h2'>{postTitle}</Typography>
            <TagList tags={props.tags}/>
            <Typography variant='body1'>{postBodyPreview}</Typography>
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={1}>
                    <Stack direction='row' alignItems='center'>
                        <ThumbUpIcon fontSize='small'sx={{mr: 1}}/>
                        {props.reactions.likes}
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <ThumbDownIcon fontSize='small' sx={{mr: 1}}/>
                        {props.reactions.dislikes}
                    </Stack>
                </Stack>
                <Button variant='contained'>Read more</Button>
            </Stack>
        </Grid>
    );
}
export default PostCard;
