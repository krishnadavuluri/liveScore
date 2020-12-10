import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import {Button, Grid} from '@material-ui/core'
import {getMatches} from './api/Api';
import Mycard from './components/card';
import Navbar from './components/Navbar';
import AlertDialog from './components/dialog';
function App(){
  const [matches,setMatch]=useState([]);
 useEffect(() => {
   getMatches().then((data)=>{setMatch(data.matches);}).catch()}, []);
  return (
    <div className="App">
      <Navbar></Navbar>  
      <Grid container>
       <Grid sm='3'></Grid>
       <Grid sm='6'>
       {
        matches.map((match)=>(
          <Mycard key={match.unique_id
           } match={match}/>
        ))
      }
       </Grid>
      </Grid>
    </div>
  );
}

export default App;
