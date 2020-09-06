import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import './Post.css';


const Post = (props) => {
    const { id, title, body } = props.post;

    return (
        <Box mb={3} ml={25} mr={25}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2" className="title-size">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {
                    props.showButton &&
                    <CardActions>
                        <Link to={`/PostDetail/${id}`} className="btn-see-more">
                            <Button variant="contained" color="primary">
                                See More
                         </Button>
                        </Link>
                    </CardActions>
                }
            </Card>
        </Box>    
    );
};

export default Post;