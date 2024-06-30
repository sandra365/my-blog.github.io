import Post from "./Post"
import postsResponse from "./postsMock"

function Feed() {
    const posts = postsResponse.posts.map((post) => {
        return <Post title={post.title} body={post.body} key={post.id} />
    })
    return (
        <>
            {posts}
        </>
    )
}

export default Feed