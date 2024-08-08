import axios from 'axios';
import { Post, PostsResponse, User } from '../types';

export const client = axios.create( {
    baseURL: 'https://dummyjson.com'
});

export const getPosts = async () => {
    try {
        const response = await client.get<PostsResponse>('/posts');
        return response.data.posts;
    } catch (error) {
        if ( axios.isAxiosError<{ message: string; }>(error) ) {
            console.log(error.response?.data.message)
        }
        console.log(error);
    }
};

export const getPost = async (postId: string) => {
    try {
        const response = await client.get<Post>(`/posts/${postId}`);
        return response.data;
    } catch {
        //finish catch statement
    }

};

export const getUser = async (userId: number) => {
    try {
        const response = await client.get<User>(`/users/${userId}`);
        return response.data;
    } catch {
        //finish catch statement
    }
};
