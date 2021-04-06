import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import styles from '../styles/home.module.css'
import { useRouter } from "next/router";
import theme from "../styles/theme";
import { useEffect } from "react";
import {
  Typography, LinearProgress
} from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Home() {
  const router = useRouter()
  const classes = useStyles();

  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/dashboard");
    } else {
      router.push("/home");
    }
  }), []

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        </head>
        <div className={classes.root}>
          <LinearProgress />
        </div>
      </div>
    </ThemeProvider>
  )
}


/*
const Appbar = function () {
  
  return (
    <div>
      <AppBar position="static" className={classes.root} style={{ background: '#2E3B55' }}>
        <Toolbar variant="regular">
          <WbIncandescentIcon className={classes.icon} />
          
          <Link href="/go_to">
            <Button variant="contained" className={classes.button} style={{ background: '#FFFFFF' }}>Access Suite</Button>
          </Link>
          <Button variant="contained" className={classes.button} style={{ background: '#FFFFFF' }}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div >
  );
}*/