import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Reactions } from './types';
import { cropPostBody, formatTitle } from './utils';
import TagList from './TagList';
import { Box, Button, Card, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material';

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
        <Grid item xs={8} sm={8} md={6} minWidth={345}>
            <Card>
                <CardContent sx={{height: 225}}>
                    <Typography variant='h5' component='h2'>{postTitle}</Typography>
                    <Box sx={{pb: 2}}><TagList tags={props.tags}/></Box>
                    <Typography variant='body2'>{postBodyPreview}</Typography>
                </CardContent>
                <CardActions sx={{p: 2}}>
                    <Stack direction='row' justifyContent='space-between' sx={{width: '100%'}}>
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
                        <Button variant='contained' size='small'>Read more</Button>
                    </Stack>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PostCard;
