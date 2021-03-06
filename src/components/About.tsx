import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import classes from "*.module.css";

const useStyles = makeStyles({
  topic: {
    fontSize: "30px",
    "@media (max-width:400px)": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },
  contributionImage: {
    maxWidth: "100%",
  },
});

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography className={classes.topic} variant="h3">
            About
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5" align="center">
            Ryota Wabuchi
            <br />
            Tokushima University Graduate School
            <br />
            From Ehime
            <br />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <img
            className={classes.contributionImage}
            src="https://grass-graph.moshimo.works/images/ryounasso.png"
          ></img>
        </Box>
      </Box>
    </>
  );
};

export default About;
