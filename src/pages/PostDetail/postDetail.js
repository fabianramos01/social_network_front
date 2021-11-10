import {useEffect, useState} from "react";
import {getPost} from "../../services/post.services";
import {PuffLoader} from "react-spinners";
import './postDetail.css';
import PostCard from "../../components/PostCard";
import {useParams} from "react-router-dom";
import {List} from "@mui/material";
import CommentCard from "../../components/CommentCard";
import { Scrollbars } from 'react-custom-scrollbars';

function PostDetail() {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({comments: []})
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        getPost(id)
            .then(data => {
                setPost(data);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="body">
            {
                loading ?
                    <PuffLoader
                        loading={loading}
                        size={150}
                        color="#368ED7"
                    />
                    :
                    <div>
                        <PostCard post={post} isActive={false}/>
                        <Scrollbars
                            autoHeight
                            autoHeightMin={100}
                            autoHeightMax={600}
                            autoHide
                            autoHideTimeout={1000}>
                            <List className="comment-list" sx={{width: '100%', bgcolor: 'background.paper'}}>
                                {
                                    post.comments.map((comment) => {
                                        return (
                                            <CommentCard key={comment.id} comment={comment}/>
                                        )
                                    })
                                }
                            </List>
                        </Scrollbars>
                    </div>
            }
        </div>
    );
}

export default PostDetail;