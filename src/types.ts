export interface Reactions {
    likes: number;
    dislikes: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface PostsResponse {
    posts: Post[];
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
};

export interface CommentAuthor {
    id: number;
    username: string;
    fullName: string;
}

export interface Comment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: CommentAuthor;
}

export interface CommentsResponseData {
    comments: Comment[];
    limit: number;
    skip: number;
    total: number;
}

export interface CommentPostData {
    body: string;
    postId: string;
    userId: number;
}
