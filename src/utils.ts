import axios from 'axios';

export function cropPostBody (postBody: string) {
    const slicedString = postBody.split(' ').slice(0, 40).join(' ');
        return ( slicedString.endsWith('.') 
            ? slicedString + '..' 
            : slicedString + '...'
        );
}

export function formatTitle (postTitile: string) {
    return postTitile.endsWith('.') 
        ? postTitile.slice(0, -1) 
        : postTitile; 
}

export function handleResponseError(error: unknown ) {
    if ( axios.isAxiosError<{ message: string }>(error) ) {
        console.log(error.response?.data.message);
    }
    console.log(error);
}
