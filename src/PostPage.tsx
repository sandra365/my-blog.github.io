import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post, User } from "./types";
import { getPost, getUser } from "./api/api";
import { Stack, Typography } from "@mui/material";
import ReactionsView from "./ReactionsView";
//?rename PostPage to PostView
//and review other name confusions
function  PostPage() {
    let { postId } = useParams();
    postId = postId!;
    const [post, setPost] = useState<Post>();
    const [author, setAuthor] = useState<User>();

    const fetchPost = async () => {
        const postData = await getPost(postId);  
        if (postData) {
            setPost(postData);
        }
    };
    
    const fetchAuthor = async () => {
        const user = await getUser(post!.userId);
        if (user) {
            setAuthor(user);
        }
    };
    
    useEffect(() => {
        fetchPost();
    }, []);

    useEffect(() => {
        if(post) {
            fetchAuthor();
        }
    }, [post?.userId]);

    if (!post) {
        return null;
    }

    return (
        author && (
            <Stack alignItems='center' sx={{width: '100%'}}>
                <Stack width='75%'>
                    <Typography variant='h5' component='h2' sx={{pb: .5}}>
                        {post.title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{pb: 2}}>
                        {author?.firstName} {author?.lastName}
                    </Typography>
                    <Typography variant='body1' sx={{pb: 2}}>
                        {post.body}
                    </Typography>
                    <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center'>
                            <VisibilityIcon fontSize='small'sx={{mr: 1}}/>
                            {post.views}
                        </Stack>
                        <ReactionsView 
                            likes={post.reactions.likes} 
                            dislikes={post.reactions.dislikes} 
                        />
                    </Stack>
                </Stack>
            </Stack>
        )
    );
}

export default PostPage;
