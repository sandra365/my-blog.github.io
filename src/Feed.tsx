import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import { getPosts } from "./api/api";
import { Post } from "./types";
import { Grid } from "@mui/material";

function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const fetchPosts = async () => {
        const posts = await getPosts();
        if (posts) {
            setPosts(posts);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    const postComponentsList = posts.map((post) => {
        return <PostCard title={post.title} tags={post.tags} body={post.body} reactions={post.reactions} key={post.id} />
    });
    return (
        <Grid container spacing={{xs: 4, md: 8, lg: 10 }} justifyContent='space-evenly'>
            {postComponentsList}
        </Grid>
    );
}

export default Feed;
