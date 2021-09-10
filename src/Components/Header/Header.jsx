import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'Gill Sans MT',
          fontWeight: 100,
      fontSize: 50,
    },
  }));

export default function Header(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#11324d' }}>
                <Toolbar >
                    <Typography  className={classes.title} position="center">
                        Kelompok 02
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}