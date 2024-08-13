import axios from 'axios';
import { Post, PostsResponse, User } from '../types';
import { handleResponseError } from '../utils';

export const client = axios.create( {
    baseURL: 'https://dummyjson.com'
});

export const getPosts = async () => {
    try {
        const response = await client.get<PostsResponse>('/posts');
        return response.data.posts;
    } catch (error) {
        handleResponseError(error);
    }
};

export const getPost = async (postId: string) => {
    try {
        const response = await client.get<Post>(`/posts/${postId}`);
        return response.data;
    } catch (error) {
        handleResponseError(error);
    }

};

export const getUser = async (userId: number) => {
    try {
        const response = await client.get<User>(`/users/${userId}`);
        return response.data;
    } catch (error) {
        handleResponseError(error);
    }
};
