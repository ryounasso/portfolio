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

import imageWork1 from '../static/images/memochat.png';
import imageWork2 from '../static/images/portfolio.jpg';
import imageWork3 from '../static/images/todo.png';
import imageWork4 from '../static/images/Auricle_authentication.png';
import imageWork5 from '../static/images/calculator.jpg';
import imageWork6 from '../static/images/blog.png';
import { Card, CardContent, CardMedia } from '@material-ui/core'
import { FullscreenExit } from '@material-ui/icons'
import { findByLabelText } from '@testing-library/dom'
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 770,
        maxWidth: '100%',
    },

    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },

    details: {
        display : 'flex',
        flexDirection : 'column',
    },

    topic: {
        fontSize: '30px',
        '@media (max-width:400px)': {
            fontSize: '20px',
          },
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
                    <Typography className={classes.topic} >
                        Works
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="https://github.com/ryounasso/hackson_07">
                                <ListItemAvatar>
                                    <Avatar variant="square" className={classes.large} src={imageWork1}></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='memoChat' secondary='メモライクなチャットアプリです。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar variant="square" className={classes.large} src={imageWork2}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='自作した気になれるポートフォリオ' secondary='シェルスクリプトで質問に答えるだけでポートフォリオが自動生成されます。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar style={{ height: '15%' }}variant="square" className={classes.large} src={imageWork3}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='レポート管理アプリ' secondary='大学の講義で出たレポートや課題を管理できます。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar style={{ height: '15%' }} variant="square" className={classes.large} src={imageWork4}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='耳形認証アプリ' secondary='耳の形で誰かを当てます。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar style={{ height: '15%' }} variant="square" className={classes.large} src={imageWork5}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='計算履歴が残る電卓' secondary='iPhone純正の電卓は計算履歴が残らないので、残る電卓を作りました。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <List className={classes.root}>
                        <ListItem>
                            <ListItemLink href="#">
                                <ListItemAvatar>
                                    <Avatar variant="square" className={`${classes.large} ${classes.details}`} src={imageWork6}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='ブログ' secondary='個人ブログです。' />
                            </ListItemLink>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    );
}

export default Works;