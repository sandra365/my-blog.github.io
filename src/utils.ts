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