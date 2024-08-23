import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function CommentInputView () {
    const [isCancelButtonDisabled, setIsCancelsButtonDisabled] = useState<boolean>(true);
    const [isCommentButtonDisabled, setICommentsButtonDisabled] = useState<boolean>(true);
    const [comment, setComment] = useState<string>('');
    const handleFormCancellation = () => {
        setComment(''); //do i need to prevComment?
        setIsCancelsButtonDisabled(true);
    }

    useEffect(() => {
        comment === ''
            ? setICommentsButtonDisabled(true)
            : setICommentsButtonDisabled(false); 
    },[comment]);
    
    return (
        <Stack>
            <TextField 
                id='comment-input-field' 
                label='Add a comment...'
                margin='normal'
                value={comment}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setComment(event.target.value); 
                }}
                onFocus={() => {
                    setIsCancelsButtonDisabled(false);
                }}
            />
            <Stack flexDirection='row' justifyContent='right' mb='1'>
                <Button 
                    disabled={isCancelButtonDisabled} 
                    variant='outlined' 
                    size='small' 
                    sx={{mr: 1}}
                    onClick={() => {
                        handleFormCancellation();
                    }}
                >
                    Cancel
                </Button>
                <Button 
                    disabled={isCommentButtonDisabled} 
                    variant='outlined' 
                    size='small'
                >
                    Comment
                </Button>
            </Stack>
        </Stack>
    );
}

export default CommentInputView;

//do work on sending commet to a backend