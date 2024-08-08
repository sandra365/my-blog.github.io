import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post, User } from "./types";
import { getPost, getUser } from "./api/api";
import { Box, Stack, Typography } from "@mui/material";

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
            setAuthor(user);//difference between actual user object and my interface?
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
            <Typography variant='h5' component='h2'>{post.title}</Typography>
            <Typography variant='subtitle1'>{author?.firstName} {author?.lastName}</Typography>
            <Typography variant='body1'>{post.body}</Typography>
            <Stack direction='row' justifyContent='space-between'>
                <Box>{post.views}</Box>
                <Box>{post.reactions.likes} {post.reactions.dislikes}</Box>
            </Stack>
        </Stack>
      

    );
}

export default PostPage;

//small bug left with author loading slighly after post
//preferably to show the simultaneously

// 1. Finish PostPage implementation / Wed
// 2. Do error handling for getPost() / Thu
// 3. Work review and refactoring / Fri