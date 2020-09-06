import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Post from '../Post/Post';


const Portal = () => {
    const [totalPost, setPost] = useState([]);

    // Get the all post from Json place holder api
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <React.Fragment>
            <Container >
                <Box mt={5}>
                    {
                        totalPost.map(item => <Post key={item.id} post={item} showButton={true} />)
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Portal;