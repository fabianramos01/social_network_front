import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Alert, Button, Snackbar} from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import ReactionButton from "./buttons/ReactionButton";
import {Link} from "react-router-dom";
import {formatISODate} from "../utils/common";
import CommentForm from "./CommentForm/CommentForm";
import {useState} from "react";

function PostCard(props) {
    const {post, isActive = true} = props;
    const [openPopup, setOpenPopup] = useState(false);
    const [commentsCount, setCommentsCount] = useState(post.comments_count);
    const [snackBarState, setSnackBarState] = useState({
        open: false,
        message: ''
    });

    const handleOpenPopup = (event) => {
        setOpenPopup(true);
    };

    const handleClosePopup = (event) => {
        setOpenPopup(false);
    };

    const addCommentToCount = () => {
        setCommentsCount(commentsCount + 1);
    };


    return (
        <Card
            sx={{p1: 2, margin: '4px auto', maxWidth: 500, flexGrow: 1}}>
            <Link to={isActive ? `post/${post.id}` : '#'} style={{textDecoration: 'none', color: 'inherit'}}>
                <CardHeader
                    title={post.title}
                    subheader={post.user_email}
                    style={{padding: "8px 15px"}}
                />
            </Link>
            <CardContent
                style={{padding: "3px 15px"}}>
                {post.content}
            </CardContent>
            <CardActions>
                <ReactionButton
                    post={post}
                    color="primary"
                    type="like"
                    quantity={post.likes_count}
                    icon={<ThumbUpIcon/>}
                />
                <ReactionButton
                    post={post}
                    color="error"
                    type="dislike"
                    quantity={post.dislikes_count}
                    icon={<ThumbDownIcon/>}
                />
                <Button color="success" startIcon={<AddCommentIcon/>} onClick={handleOpenPopup}>
                    {commentsCount}
                </Button>
                <hr/>
                {formatISODate(post.created_at)}
            </CardActions>
            <CommentForm
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleClose={handleClosePopup}
                post={post}
                addCommentToCount={addCommentToCount}
                setSnackBarState={setSnackBarState}
            />
            <Snackbar
                autoHideDuration={6000}
                open={snackBarState.open}
                message={snackBarState.message}
            >
                <Alert severity="success" sx={{width: '100%'}}>
                    {snackBarState.message}
                </Alert>
            </Snackbar>
        </Card>
    );
}

export default PostCard;