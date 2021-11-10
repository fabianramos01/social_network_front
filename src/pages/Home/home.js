import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getPostList} from "../../services/post.services";
import {PuffLoader} from "react-spinners";
import './home.css';
import PostCard from "../../components/PostCard";
import { Scrollbars } from 'react-custom-scrollbars';

function Home() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setLoading(true);
        getPostList()
            .then(data => {
                setPosts(data.data);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

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
                    <Grid container>
                        <Grid item xs={12}>
                            <Scrollbars
                                autoHeight
                                autoHeightMin={100}
                                autoHeightMax={700}
                                autoHide
                                autoHideTimeout={1000}>
                                {
                                    posts.map((post) => {
                                        return (
                                            <PostCard key={post.id} post={post}/>
                                        )
                                    })
                                }
                            </Scrollbars>

                        </Grid>
                    </Grid>
            }
        </div>
    );
}

export default Home;