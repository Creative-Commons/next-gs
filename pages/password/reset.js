import { useRouter } from "next/router";
import axios from "axios";
import API_BASE_URL from "../../constants";
import { useState } from "react";
import { Button, Fade, TextField, Container, Avatar, Typography, Grid, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Link from "next/link";
import teal from "@material-ui/core/colors/teal";



const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    land_root: {
      minHeight: '100vh',
      backgroundImage: "url('/resources/header_bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "80% auto",
      backgroundPosition: "center center",
      background: "#1e1e1e"
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    gs_font: {
      fontFamily: ["Montserrat"]
    },
    teal: {
      color: teal[400]
    },
    bg_teal: {
      padding: "4vh",
      backgroundColor: "#1e1e1e",
      color: "#fff",
      transitionDuration: 500,
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: teal[400],
        transitionDuration: 500
      },
    },
    darkBackground: {
      background: "#1e1e1e"
    },
    scroll_icon_light: {
      color: "#f3f3f3",
      padding: "3vh",
      marginBottom: "5vh",
    },
    scroll_icon_dark: {
      color: "#1e1e1e",
      padding: "3vh",
      marginBottom: "5vh",
    },
    table: {
      border: "2px solid black",
      borderBottom: "2px solid black",
    },
    title: {
      fontFamily: ["Montserrat"],
      fontSize: 120,
    },
    devAvatar: {
      width: 100,
      height: 100,
      alignItems: "center"
    },
    lightText: {
      color: "#fff"
    },
    hoverBold:{
      fontFamily: ["Montserrat"],
      transitionDuration: 500,
      '&:hover': {
        fontFamily: ["Montserrat"],
        letterSpacing: 5,
        fontWeight: "bold",
        transitionDuration: 500
      },
    },
    hoverShadow:{
      transitionDuration: 500,
      '&:hover': {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        transitionDuration: 500
      },
    },
    hoverDark: {
      transitionDuration: 500,
      '&:hover': {
        color: "#1e1e1e",
        transitionDuration: 500
      },
    },
    hoverLight: {
      transitionDuration: 500,
      '&:hover': {
        color: "#f2f2f2",
        transitionDuration: 500
      },
    },
    roundCorners: {
      borderRadius: 10
    },
    padding: {
      padding: 10,
    },
    
    app_bar: {
      background: "#1e1e1e",
  },
  navButtons: {
      color: teal[400],
      fontFamily: ["Montserrat"],
      transitionDuration: 500,
      '&:hover': {
          boxShadow: 'none',
          color: "#f3f3f3",
          transitionDuration: 500,
      },
  },
  }));


export default function ResetPasswordPage () {
    const { query } = useRouter();
    const [password, setPassword] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [message, setMessage] = useState("");
    const classes = useStyles();

    function resetPassword () {
        axios.post(
            API_BASE_URL + "/reset_password/",
            {
                "username": username,
                "password": password,
                "token": query.token
            }
        ).then((response) => {
            console.log(response.data.message);
        }).catch((error) => setMessage("Failed to reset password"));
    }

    return (
        <Fade in={true} timeout={500}>
            <>            
    <div>
        <AppBar position="static" className={classes.app_bar}>
            <Toolbar id="back-to-top-anchor" variant="dense">
                <Avatar src="/resources/logo_dark.png" />
                <Grid container justify="space-evenly" alignItems="center">
                    <Grid item><Link href="/home">
                        <Button className={classes.navButtons}>
                            <Typography className={classes.hoverBold}>
                                Home
                            </Typography>
                        </Button>
                    </Link></Grid>
                    <Grid item><Link href="https://gs-suite-main.herokuapp.com/">
                        <Button className={classes.navButtons}>
                            <Typography className={classes.hoverBold}>
                                Main Website
                            </Typography>
                        </Button>
                    </Link></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
    <div className={classes.root}>
            <Container className={classes.container}>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3">
                        Reset Password
                        </Typography>
                    </Grid>
                    <Grid>
                        <div style={{paddingRight: 60, paddingLeft: 60}} >
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            onChange={e => setUsername(e.target.value)}
                            name="username"
                            autoFocus
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            />
                            <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => {resetPassword()}}
                            >
                            Reset Password
                            </Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            </div>
            </>
        </Fade>
    )
}