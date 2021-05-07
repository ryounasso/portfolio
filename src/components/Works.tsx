import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import imageWork2 from "../static/images/portfolio.jpg";
import imgGit from "../static/images/GitHub.png";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Calculator from "./Cal/Calculator";
import MemoChat from "./memoChat/MemoChat";
import FlutterTodo from "./flutterTodo/FlutterTodo";
import Blog from "./blog/Blog";
import EarShape from "./earShape/EarShape";
import Ca from "./ca/Ca";
import DailyReport from "./dailyReport/DailyReport";
import SmileApp from "./smileApp/SmileApp";

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

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography className={classes.topic}>Works</Typography>
        </Box>
        <MemoChat />
        <DailyReport />
        <SmileApp />
        {/* <Box display="flex" justifyContent="center" p={1}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  className={classes.large}
                  src={imageWork2}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="自作した気になれるポートフォリオ"
                secondary="シェルスクリプトで質問に答えるだけでポートフォリオが自動生成されます。"
              />
              <Box display="flex">
                <ListItemLink href="https://github.com/ryounasso/TechStudyGroup-hackathon-202008">
                  <img alt="github" src={imgGit} className={classes.img} />
                </ListItemLink>
              </Box>
            </ListItem>
          </List>
        </Box> */}
        <Ca />
        <FlutterTodo />
        <EarShape />
        <Calculator />
        <Blog />
      </Box>
    </>
  );
};

export default Works;
