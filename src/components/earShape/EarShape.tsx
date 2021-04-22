import React, { useState } from "react";
import imageWork4 from "../../static/images/Auricle_authentication.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import imgGit from "../../static/images/GitHub.png";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import EarShapeModal from "./EarShapeModal";

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
}));

const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      img: {
        objectFit: "contain",
      },
    },
  },
});

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const EarShape: React.FC = () => {
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
            <MuiThemeProvider theme={theme}>
              <Avatar
                variant="square"
                className={classes.large}
                src={imageWork4}
              ></Avatar>
            </MuiThemeProvider>
          </ListItemAvatar>
          <ListItemText
            primary="耳形認証アプリ"
            secondary="耳の形で誰かを当てます。"
          />
          <CardActions>
            <Button size="small" onClick={handleOpen}>
              more info
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
                <EarShapeModal />
              </div>
            </Fade>
          </Modal>
          <Box display="flex">
            <ListItemLink href="https://github.com/ryounasso/ear_hape_authentication">
              <img alt="github" src={imgGit} className={classes.img} />
            </ListItemLink>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default EarShape;
