import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashCronometrado from "./DashCronometrado";
import Container from '@material-ui/core/Container';

import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const backgroundShape = require("../../imagenes/fondoCronos.svg");
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: 0,
    paddingBottom: 500,
    height: 1000,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

export default function Cronometrado () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container fixed className={classes.root}>
        <Typography component="div" >
          
          <DashCronometrado />
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}
