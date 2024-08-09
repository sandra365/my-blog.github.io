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

    if (!post) {//if !author
        return null;
    }

    return (
        <Stack>
            <Typography variant='h5' component='h2'>
                {post.title}
            </Typography>
            <Typography variant='subtitle1'>
                {author?.firstName} {author?.lastName}
            </Typography>
            <Typography variant='body1'>
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
    );
}

export default PostPage;

//small bug left with author loading slighly after post
//preferably to show the simultaneously

//Box is a MUI wrapper for applying styles
//Stack is a component for layout of immediate children (1-dimensional layout)
//For 2-dimensional layout use Grid