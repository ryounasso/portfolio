import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imageWork1 from "../../static/images/memochat.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    // backgroundSize : 'contain',
    objectFit: "contain",
    marginTop: "8px",
    margin: "auto",
  },
  imgArea: {
    textAlign: "center",
  },
}));

export default function ModalContent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.imgArea}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imageWork1}
          title="Contemplative Reptile"
          className={classes.large}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            MemoChat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            メモライクな見た目をした、チャットアプリです。技育祭をベースに作成しました。
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ marginTop: "4px" }}
          >
            使用技術
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            HTML, CSS, JavaScript, Django, Redis
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
