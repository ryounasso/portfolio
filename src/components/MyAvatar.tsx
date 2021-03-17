import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

import ImageFile from '../static/images/IMG_6322.JPG'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

const MyAvatar: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1}>
                    <Avatar
                    alt='Ryota Wabuchi'
                    src={ImageFile}
                    className={classes.large}
                    />
                </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Typography variant='h5'>
                    Ryota Wabuchi
                </Typography>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Typography variant='body1'>
                    University
                </Typography>
            </Box>
        </>
    );
}

export default MyAvatar;