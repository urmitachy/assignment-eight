import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NotFound = () => {
    return (
        <React.Fragment>
            <Container >
                <Box mb={2} mt={5}>
                    <Alert severity="error">
                        <h1>This Page Not Found.</h1>
                        <h3>404 Error.</h3>
                    </Alert>
                </Box>
                <Box>
                    <Link to={`/portal`} className="btn">
                        <Button variant="contained" color="primary">
                            Back To Home
                        </Button>
                    </Link>          
                </Box>
            </Container>
        </React.Fragment>      
    );
};

export default NotFound;