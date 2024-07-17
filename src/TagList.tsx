interface TagListProps {
    tags: string[];
}

function TagList(props: TagListProps) {
    return props.tags.map((tag, index) => {
        const capitalizedTagName = tag[0].toUpperCase() + tag.slice(1);
        return (
            <li key={index}>
                <p>{capitalizedTagName}</p>
            </li>
        );
    });
}

export default TagList;
