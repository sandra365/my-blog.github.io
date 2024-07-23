import { Chip, List, ListItem, Stack } from "@mui/material";

interface TagListProps {
    tags: string[];
}

function TagList(props: TagListProps) {
    const itemList = props.tags.map((tag, index) => {
        const capitalizedTagName = tag[0].toUpperCase() + tag.slice(1);
        return (
                <Chip 
                    key={index}
                    component='li'
                    label={capitalizedTagName}
                />
        );
    });
    return (
        <Stack component='ul' direction='row' justifyContent='flex-start' spacing={1} sx={{ pl: 0 }}>
            {itemList}
        </Stack>
    )
}

export default TagList;
