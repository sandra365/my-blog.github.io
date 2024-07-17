import axios from 'axios';
import { PostsResponse } from '../types';

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
