import { Reactions } from './types';
import { cropPostBody, formatTitle } from './utils';
import './Post.css';
import TagList from './TagList';
import { Button } from '@mui/material';

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
            <h2>{postTitle}</h2>
            <ul><TagList tags={props.tags}/></ul>
            <p>{postBodyPreview}</p>
            <div className='post-bottom-container'>
                <div className='post-reactions-container'>
                    <div>
                        {props.reactions.likes}
                    </div>
                    <div>
                        {props.reactions.dislikes}
                    </div>
                </div>
                <Button variant='contained'>Read more</Button>
            </div>
        </div>
    );
}
export default PostCard;
