import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashInstrucciones from "./InstruccionesComplementos/DashInstrucciones"
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const backgroundShape = require("../../imagenes/fondoInstrucc.svg");

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200vh",
  },
  paper: {
    
    textAlign: 'center',
  
  },
});


export default function Instrucciones() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Container fixed className={classes.root}>
        <Typography component="div">
          
          <DashInstrucciones />
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}