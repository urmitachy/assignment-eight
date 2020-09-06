import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Post from '../Post/Post';
import Container from '@material-ui/core/Container';
import Comment from '../Comment/Comment';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import NotFound from '../NotFound/NotFound';


const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    // Get and set The selected post by using id 
    const postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    useEffect(() => {
        fetch(postURL)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch((error) => {
                console.log(error)
            });
    }, [postURL]);

    // Get the comment from this post
    const commentURL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    useEffect(() => {
        fetch(commentURL)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [commentURL]);

    return (
        <React.Fragment>
            <Container>
                { // If comments not load than show ar error page
                    comments.length > 0 ?
                        <Box>
                            <Box mt={2}>
                                <Post post={post} showButton={false} />
                            </Box>
                            <Box mt={2} ml={30} mr={30}>
                                <List component="nav" >
                                    {
                                        comments.map(item => <Comment key={item.id} comment={item} />)
                                    }
                                </List>
                            </Box>
                            <Box ml={30} mr={30} mb={2}>
                                <Link to={`/portal`} className="btn">
                                    <Button variant="contained" color="primary">
                                        Back To Home
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    : <NotFound /> //Error page
                }
            </Container>
        </React.Fragment>
    );
};

export default PostDetail;