import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashCorrido from "./DashCorrido";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FooterKal from "../FooterKal";
import Typography from '@material-ui/core/Typography';

const backgroundShape = require("../../imagenes/fondoCorrido.svg");

const useStyles = makeStyles({

  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  paper: {
   /*  padding: theme.spacing(2), */
    textAlign: 'center',
  /*   color: theme.palette.text.secondary, */
  },
});

export default function Corrido () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container fixed className={classes.root} >
        <Typography component="div">
          
          <DashCorrido />
          <FooterKal styles={{backgroundColor: "black"}}/>
        </Typography>
        
      </Container>
      
    </React.Fragment>
  );
}
