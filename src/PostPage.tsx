import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, Post, User } from "./types";
import { getComments, getPost, getUser } from "./api/api";
import { Divider, Stack, Typography } from "@mui/material";
import ReactionsCounter from "./ReactionsCounter";
import CommentView from './CommentForm';
import CommentFormInput from './CommentFormInput';

function  PostPage() {
    let { postId } = useParams();
    postId = postId!;
    const [post, setPost] = useState<Post>();
    const [author, setAuthor] = useState<User>();
    const [comments, setComments] = useState<Comment[]>();

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

    const fetchComments = async () => {
        const comments = await getComments();
        if (comments) {
            setComments(comments);
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

    useEffect(() => {
        fetchComments();
    },[]);
    //why is this code here
    if (!post) {
        return null;
    }

    const createCommentsStack = () => {
        if (comments) {
            const commentsStack = comments.map((comment, index: number) => {
                let lastComment = index === (comments.length - 1);
                return (
                    <Stack key={comment.id}>
                        <CommentView
                        commentAuthor={comment.user.username}
                        commentText={comment.body}
                        />
                        { lastComment ? null : <Divider/> }
                    </Stack>
                );
            });
            return commentsStack;
        } 
    };

    const addComment = (newComment:Comment) => {
        setComments(prevComments => {
            return prevComments ? [newComment, ...prevComments] : [newComment];
        })
    };

    return (
        author && (
            <Stack alignItems='center' width='100%'>
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
                            <Typography variant='body1'>
                                {post.views}
                            </Typography>
                        </Stack>
                        <ReactionsCounter 
                            likes={post.reactions.likes} 
                            dislikes={post.reactions.dislikes} 
                        />
                    </Stack>
                </Stack>
                <Stack width='75%'>
                    <CommentFormInput 
                        postId={postId} 
                        addComment={addComment}
                    />
                    {createCommentsStack()}
                </Stack>
            </Stack>
        )
    );
}

export default PostPage;
