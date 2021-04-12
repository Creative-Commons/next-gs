import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Table, TableHead, TableRow, TableCell, TableBody, AppBar, Toolbar, Avatar, Button } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import Link from "next/link";
import data from "./apkData.json";
import Count from "../../components/Count";
import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";
import NavBar from "../../components/navBar";


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


export default function DownloadApp () {
  const [userCount, setUserCount] = useState(0);
  const [classroomCount, setClassroomCount] = useState(0);

  const classes = useStyles()
  const checked = true;

  function getData(){
    fetch(
      "https://gs-suite-dev.herokuapp.com/public/get_total_counts/"
    ).then((response) => (
      console.log(response)
    ));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
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
    <div className={classes.root} id="downloads">
      <Container>
        <Grid container justify="space-evenly" alignItems="center" spacing={2}>
          <Grid item>
            <Grid container justify="flex-start" direction="column" spacing={2}>
              <Grid item>
                <Pulse>
                <Typography className={classes.gs_font} variant="h2" >
                  Download the app
                </Typography>
                </Pulse>
              </Grid>
              <Grid item>
              <Pulse>
                <Typography className={[classes.teal, classes.hoverBold]} variant="h2">
                    here...
                </Typography>
                </Pulse>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" justify="space-evenly" spacing={2}>
            <div className={classes.hoverShadow}>
              <Bounce cascade>
              <Grid item >
                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.darkBackground}>
                    <TableRow>
                    <TableCell className={classes.teal} align="center">Device</TableCell>
                    <TableCell className={classes.teal} align="center">Download Link</TableCell>
                    <TableCell className={classes.teal} align="center">Hash</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{row.type}</TableCell>
                        <TableCell>
                            <Typography className={classes.teal}>
                              <Link href={row.link}>
                                {row.link}
                              </Link>
                            </Typography>
                        </TableCell>
                        <TableCell>{row.hash}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
              </Bounce>
              </div>
              {
                checked ? (
                  <Grid item xs>
                  <div className={classes.container}>
                    <Count label="Total Downloads" number="0" duration="2" classes={classes} />
                  </div>
                  </Grid>
                ) : (
                  <></>
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    </>
  );
}
