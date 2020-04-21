import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const logo = require("../imagenes/footer.png");

const useStyles = makeStyles((theme) => ({

  appBar: {
    top: 'auto',
    bottom: 10,
    backgroundColor: "#F5F5F5",
    height: 50,
    marginLeft: 100,
  },
  grow: {
    flexGrow: 1,
  },

  logo: {
    image: "url(${logo})",
  },

  made: {
      alignItems: "center",
      justifyItems: "center",
  }
}));

export default function FooterKal() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <img className={classes.logo}></img>
                <Typography>
                    <h5 className={classes.made}>KALKULUS made with ♡ by <a href="mailto:kathiavegamina@live.com.mx?subject=subjecttext">Kathia Vega Mina</a></h5>
                </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
