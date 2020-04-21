import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';



import styles from "./DashInstruccionesEstilos.css";

import Container from '@material-ui/core/Container';
import ExpansionCrono  from "./ExpansionCrono";
import ExpansionNoCrono from "./ExpansionNoCrono";
import ExpansionCorrido from "./ExpansionCorrido";

class DashInstrucciones extends Component {
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
        <Container width={5} >
            < h1 className={styles.titulo}>Instrucciones</h1>
        </Container>
        <div className={styles.root} >
            <Grid container  justify="center"> 
                
                <Grid
                    spacing={3}
                    justify="space-around"
                    alignItems="center"
                    
                    container
                    className={styles.grid}
                >
                    <Grid container spacing={3} p={2}
                        justify="space-around"
                        alignItems="center">
                        <Grid item xs={12}>    
                           <ExpansionCrono/>
                        </Grid>
                    
                        <Grid item xs={12}> 
                            <ExpansionNoCrono/>   
                        </Grid>

                        <Grid item xs={12} >    
                            <ExpansionCorrido/>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
  );
}

}


export default DashInstrucciones;