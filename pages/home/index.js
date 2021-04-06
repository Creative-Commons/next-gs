import {
  Avatar, Button, CssBaseline,
  TextField, FormControlLabel, Checkbox,
  Link, Paper, Box, Grid, Typography, Collapse,
  CircularProgress, Fade, Container, IconButton
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tilt from "react-tilt";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBar from "../../components/navBar";
import teal from "@material-ui/core/colors/teal";

import DownloadApp from "../../components/DownloadApp";


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gs_font: {
    fontFamily: ["Montserrat"]
  },
  teal: {
    color: teal[400]
  }
}));


export default function Home (props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(true);
  }, []);

  <title>Home | GS-Suite</title>

  return (
    <div>
      <Fade in={true} timeout={400}>
        <Container>
          <CssBaseline />
          <div className={classes.root} id="header">

            <Collapse
              in={checked}
              {...(checked ? { timeout: 1400 } : {})}
              collapsedHeight={100}
            >
              <div className={classes.container}>
                <Grid container spacing={1}>
                <Grid alignItems="baseline" item>
                  <Typography className={classes.gs_font, classes.teal} variant="h2">
                    Welcome to
                  </Typography>
                </Grid>
                <Grid alignItems="baseline" item>
                  <Typography className={classes.gs_font} variant="h2">
                    GS-Suite
                  </Typography>
                </Grid>
                <Grid alignItems="baseline" item>
                  <Typography className={classes.gs_font, classes.teal} variant="h2">
                    .
                  </Typography>
                </Grid>
                </Grid>

                <Scroll className={classes.main} to="download-app" smooth={true}>
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>
                </Scroll>
              </div>
            </Collapse>
          </div>

          <DownloadApp />

        </Container>
      </Fade>
    </div>
  );
}

{/* <Container>
  <Wrapper>
    <InnerWrapper options={{ max: 25 }}>
      <Left>
        <LeftText />
      </Left>
      <TiltWrapper>
        <Img src="/pic.jpg"></Img>
      </TiltWrapper>
    </InnerWrapper>
  </Wrapper>
</Container> */}