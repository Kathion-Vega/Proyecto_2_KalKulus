import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

import OperacionesNoCrono from "./ComplementosNoCrono/OpercionesNoCrono";

import CorrecBotonNoCrono from "./ComplementosNoCrono/CorrecBotonNoCrono";
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import RestorePageRoundedIcon from '@material-ui/icons/RestorePageRounded';
import styles from './DashNoCronometradoEstilo.css'; 


class DashNoCronometrado extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            someValueThatTheUserChanges: 7,
            abc: 'a'
        };
        this.state = this.initialState;
    }
    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }
    
    
    
    
    render() {
        
    return (
    <React.Fragment>
        <CssBaseline />
        
        <Container width={1} >
            <h1 className={styles.h1}>Cálculo No Cronometrado</h1>
        </Container>
        <div className={styles.root} >
            <Grid container  justify="center"> 
                
                <Grid
                    spacing={0}
                    justify="space-around"
                    alignItems="center"
                    
                    container
                    className={styles.grid}
                >
                    <Grid container spacing={1} p={2}
                        justify="space-around"
                        alignItems="center">
                        <Grid item xs={12} md={4}>    
                            <OperacionesNoCrono/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={10} p={2}
                        justify="center"
                        alignItems="center"
                        style={{ position: "relative", marginTop: "50px" }}>
                        <Grid item xs={4} lg={2} m={2}>    
                            <CorrecBotonNoCrono />
                        </Grid>
                        <Grid item xs={4} lg={2} m={2} >    
                            <Button
                            variant="contained"
                            startIcon={<RestorePageRoundedIcon />}
                            onClick={this.onResetClick.bind(this)}>Reset
                            </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
  );
}

}


export default DashNoCronometrado;