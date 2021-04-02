import React from 'react';
import {
    CssBaseline, Container, Link,
    Grid, Paper, Typography, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from "next/router";
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
        padding: theme.spacing(2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#00465D",
      
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    title: {
        padding: 20
    }
  }));
  

export default function SignIn (props) {
    let router = useRouter()
    const classes = useStyles();
   
    return (
        <Fade in={true} timeout={500}>
            <div className={classes.root}>
                <Container component="main">
                    <title>Home | GS-Suite</title>
                    <CssBaseline />
                    <div className={classes.paper}>
                    <Grid container direction="column" justify="center" alignItems="space-evenly">
                        <Grid item xs>
                            <Grid container direction="row" justify="center" alignItems="baseline">
                                <Typography className={classes.title}  variant="h2" component="h1">
                                    Welcome to 
                                </Typography>
                                <Typography className={classes.title}  variant="h1" component="h1">
                                    GS-Suite
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                    <Link href="/auth/sign_in">
                            <Button variant="contained" size="large" color="primary">
                                Sign In
                            </Button>
                        </Link>
                    <br /> 
                    <Link href="/auth/sign_up">
                        <Button variant="contained" size="large" color="primary">
                            Sign Up
                        </Button>
                    </Link>
                </div>
                </Container>
            </div>
        </Fade>
    )
}