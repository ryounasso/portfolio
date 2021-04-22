import React, { useState } from "react";
import imageWork6 from "../../static/images/blog.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import imgGit from "../../static/images/GitHub.png";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import BlogModal from "./BlogModal";
import LinkIcon from "@material-ui/icons/Link";
import Link from "@material-ui/core/Link";
import MoreIcon from "@material-ui/icons/More";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: "100%",
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    // backgroundSize : 'contain',
    objectFit: "contain",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },

  topic: {
    fontSize: "30px",
    "@media (max-width:400px)": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },
  img: {
    width: "20px",
    height: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    //   padding: theme.spacing(2, 4, 3),
  },
  link: {
    color: "black",
    backgroundColor: "white",
  },
}));

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Blog: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    // setPathId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" p={1}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              variant="square"
              className={`${classes.large} ${classes.details}`}
              src={imageWork6}
            ></Avatar>
          </ListItemAvatar>
          <ListItemText primary="ブログ" secondary="個人ブログです。" />
          <CardActions style={{ padding: 0 }}>
            <Button size="small" onClick={handleOpen}>
              <MoreIcon />
            </Button>
          </CardActions>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <BlogModal />
              </div>
            </Fade>
          </Modal>
          <Box display="flex">
            <Link href="https://blog-ten-teal.vercel.app/" color="inherit">
              <Avatar className={classes.link}>
                <LinkIcon />
              </Avatar>
            </Link>
            <ListItemLink href="https://github.com/ryounasso/blog">
              <img alt="github" src={imgGit} className={classes.img} />
            </ListItemLink>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Blog;
