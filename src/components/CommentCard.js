import {Fragment} from "react";
import {Divider, Grid, ListItem, ListItemText, Typography} from "@mui/material";
import {formatISODate} from "../utils/common";

function CommentCard(props) {
    const {comment} = props;

    const CustomFragment = () => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {comment.user_email}
                        </Typography>
                        {" — " + comment.content}
                    </Fragment>
                </Grid>
                <Grid item xs={12} style={{textAlign: "right"}}>
                        {formatISODate(comment.created_at)}
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={comment.title}
                    secondary={<CustomFragment/>}
                />
            </ListItem>
            <Divider/>
        </>
    );
}

export default CommentCard;