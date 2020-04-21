import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';

import OperacionesCorrido from "./CorridoComponentes/OperacionesCorrido";

import ButtonsCorrido from "./CorridoComponentes/ButtonsCorrido";
import Button from '@material-ui/core/Button';
import styles from "./DashCorridoEstilos.module.css";

import Container from '@material-ui/core/Container';
import RestorePageRoundedIcon from '@material-ui/icons/RestorePageRounded';

class DashCorrido extends Component {
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
            < h1 className={styles.titulo}>Cálculo Corrido</h1>
        </Container>
        <div className={styles.root}  >
            <Grid container  justify="center"> 
                
                <Grid
                    
                    justify="space-around"
                    alignItems="center"
                    
                    container
                    className={styles.grid}
                >
                    <Grid container spacing={1} 
                        justify="space-around"
                        alignItems="center">
                        <Grid item xs={12} sm={6} lg={12}>    
                            <OperacionesCorrido/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} 
                        justify="center"
                        alignItems="center"
                        style={{ marginTop: "50px" }}>
                        <Grid item xs={3}  >    
                            <ButtonsCorrido />
                        </Grid>
                        <Grid item xs={3} >    
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


export default DashCorrido;