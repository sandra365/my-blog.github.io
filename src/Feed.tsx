import PostCard from "./PostCard";
import './Feed.css';
import { useEffect, useState } from "react";
import { getPosts } from "./api/api";
import { Post } from "./types";

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
        <div className="feed">
            {postComponentsList}
        </div>
    );
}

export default Feed;
