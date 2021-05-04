import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: "100%",
  },

  topic: {
    fontSize: "30px",
    "@media (max-width:400px)": {
      fontSize: "20px",
      fontWeight: "bolder",
    },
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography className={classes.topic} variant="h3">
            Skills
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">Languages</Typography>
              <Typography color="textSecondary">
                JavaScript / Java / C / Python / TypeScript / Sass
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">Frameworks</Typography>
              <Typography color="textSecondary">
                React / Django / Flutter / tailwind css / Vue.js
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
