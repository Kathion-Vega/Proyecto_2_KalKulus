import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashNoCronometrado from "./DashNoCronometrado";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const backgroundShape = require("../../imagenes/fondoNoCronos.svg");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 1000,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    width: 1200,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    height: 500,
    
    
  },

h1:  {
    color: "#4328B8", 

  },
}));
export default function NoCronometrado () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
 
        <Container fixed className={classes.root}  >
        <Typography component="div">
          
          <DashNoCronometrado />
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}