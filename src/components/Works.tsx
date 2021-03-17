import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 770,
        maxWidth: '100%',
    },
}));

function ListItemLink(props: ListItemProps<'a', {button?: true}>){
    return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='h5'>
                        Works
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Work1' secondary='Work1です' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    );
}

export default Works;