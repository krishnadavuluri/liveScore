import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { getMatchDetails } from "../api/Api";
import React, {useEffect,useState,Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Mycard=({match})=>{
    const [details,setDetail]=useState({});
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleClick=(id)=>
    {

        getMatchDetails(id).then(data=>{setDetail(data);console.log(data);handleClickOpen()}).catch(err=>{
            console.log('Error hai!');
        })
    }
    const getMatchCard=()=>{
        return (
            <Card style={{marginTop:20}}>
                <CardContent>
                    <Grid container style={{marginTop:20}} justify='center' alignContent='center'  spacing={4}>
                        <Grid item>
                           <Typography>{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography >VS</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container spacing={3} justify='center'>
                         <Grid item>
                         <Button onClick={()=>{
                             handleClick(match.unique_id)
                         }} variant="outlined" color="secondary">Show details</Button>        
                         </Grid>
                         <Grid item>
                           <Button variant="outlined" color="secondary">
                              Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                           </Button>        
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );

    }
    const getMyDialogBox=()=>{
           return(
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{details.description}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography variant="h5">{details.stat}</Typography>
                <Typography>{details.score}</Typography>
           <Typography>{details.MatchStarted? "Match started" :"Match Is Not started"}</Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              
              <Button onClick={handleClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
           );

    }
    return (<Fragment>
        {getMatchCard()}
         {getMyDialogBox()} 
    </Fragment>);
};
export default Mycard;
