import React from 'react'
import {AppBar, Toolbar, Typography,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
const Navbar=()=>{
    return (
        <AppBar position="static">
         <Toolbar>
             <IconButton  color="inherit">
              <MenuIcon />
             </IconButton>
             <Typography>Live Score</Typography>
           </Toolbar>
        </AppBar>
    )
}
export default Navbar;