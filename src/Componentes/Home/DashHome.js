import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";


const backgroundShape = require("../../imagenes/fondoHome.svg");
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: 561,
    paddingRight:200,
    marginRight:10,
    marginLeft:10,
    paddingLeft: 20,
    
  },
  grid: {
    width: 1200,
    height: "600px",
   
  },
});


export default function DashHome() {

    const classes  = useStyles();
   

    return (
      <React.Fragment>
        <CssBaseline />
        
        
        <div className={classes.root}>
          <Grid container justify="center">
            
          </Grid>
        </div>
      </React.Fragment>
    );
  }

