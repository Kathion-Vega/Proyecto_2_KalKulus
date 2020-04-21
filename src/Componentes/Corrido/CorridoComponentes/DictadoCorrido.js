
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';


import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 650,
    },
  },
  tamaño: {
    maxWidth: "70px",
    paddingLeft: theme.spacing(1),
    margin: 0,
 
    
  },

}));


function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <TableCell>{props.value}</TableCell>;
  }

function ListSimbolo(props){
    return <TableCell>{props.value}</TableCell>
}
  
function NumberList(props) {
    
    const numbers = props.numbers;
    
    const listItems = numbers.map((number) =>

      <ListItem key={number.toString()}
                value={number} />
    );
    const classes = useStyles();
    return (
      <TableCell className={classes.tamaño}>
            {listItems[Math.floor(Math.random()*listItems.length)]} 

      </TableCell>
    );
}
  
function SimbolList(props) {
    
    const simbolos = props.simbolos;
 
    const listSimbolos =simbolos.map((simbolo) =>
        <ListSimbolo key={simbolo.toString()}
                     value={simbolo} />
    );

    const classes = useStyles();
    return (
      <TableCell className={classes.tamaño}>
            {listSimbolos[Math.floor(Math.random()*listSimbolos.length)]}
      </TableCell>
    );
  }  
   
    const numbers = [1, 2, 3, 4, 5];
    const simbolos = ["+","-","*","/"];
  
    class DictadoCorrido extends React.Component {
      
        constructor(props){
            super(props);
            this.state={
                numbers: "",
                simbolos: ""
            }
           
        }
        handleChange = age => event => {
          this.setState({
            [age]: event.target.value,
          });
        };
        render() {
          
          return (
            <TableContainer component={Paper}>
              <Table  aria-label="simple table" style={ {minWidth: "650px", padding:"0px"}}>  
                <TableRow>  
                    <NumberList numbers={numbers} /> 
                
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} />

                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} /> 
                    <SimbolList simbolos={simbolos} />
                    
                    <NumberList numbers={numbers} style={{  marginRight: "0px" }} />
                    <TableCell>
                      <TextField 
                        style={{ position: "relative", marginLeft: "0px", width:"100px" }}
                        
                        //label="Number"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        //type="number"
                       
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        
                        />
                    </TableCell> 
                </TableRow> 
                  
              </Table>

            </TableContainer>
            )
        }
    }

    export default DictadoCorrido;
        