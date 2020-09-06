import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import './Comment.css'

const Comment = (props) => {
    const [userImg, setUserImg] = useState({});
    const { name, body } = props.comment;

    //Get The user Avatar from random user api 
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(res => res.json())
            .then(data => setUserImg(data.results[0].picture))
    }, [])

    return (
        <Box mb={1}>
            <ListItem className="list-item">
                <ListItemText >
                    <Box display="flex">
                        <Box mr={3}>
                            <Avatar alt="Harry" src={userImg.large} />
                        </Box>
                        <Box>
                            <Box color="text.primary" className="name-size">
                                {name}
                            </Box>
                            <Box color="text.secondary" className="comment-size">
                                {body}
                            </Box>
                        </Box>
                    </Box>
                </ListItemText>
            </ListItem>
            <Divider />
        </Box>
    );
};

export default Comment;