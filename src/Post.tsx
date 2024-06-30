interface PostProps {
    title: string;
    body: string;
}

function Post(props:PostProps) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button>Read more</button>
        </>
    )
}
export default Post