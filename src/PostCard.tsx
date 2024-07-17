import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Reactions } from './types';
import { cropPostBody, formatTitle } from './utils';
import './Post.css';
import TagList from './TagList';
import { Button, List, Stack, Typography } from '@mui/material';

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
        <div className='post'>
            <Typography variant='h5' component='h2'>{postTitle}</Typography>
            <TagList tags={props.tags}/>
            <Typography variant='body1'>{postBodyPreview}</Typography>
            <div className='post-bottom-container'>
                <div className='post-reactions-container'>
                    <div>
                        <ThumbUpIcon fontSize='small'/>
                        {props.reactions.likes}
                    </div>
                    <div>
                        <ThumbDownIcon fontSize='small'/>
                        {props.reactions.dislikes}
                    </div>
                </div>
                <Button variant='contained'>Read more</Button>
            </div>
        </div>
    );
}
export default PostCard;
