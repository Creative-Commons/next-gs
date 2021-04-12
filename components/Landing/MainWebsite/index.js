import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Link from "next/link";
import Count from "../../Count";
import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";


export default function DownloadApp ({checked, classes}) {


  return (
    <>
    <div className={classes.root} id="main-website">
      <Container className={classes.darkBackground}>
        <Grid container justify="space-evenly" alignItems="center" spacing={2}>
        <Grid item>
            <Grid container justify="flex-start" alignItems="center" direction="row" spacing={2}>
            <Grid item>
                <Pulse>
                <Typography className={[classes.gs_font, classes.lightText]} variant="h4" >
                  Download the app
                </Typography>
                </Pulse>
              </Grid>
              <Grid item>
                <Pulse>
                    <Typography className={[classes.hoverBold, classes.teal, classes.hoverLight]} variant="h1" >
                        <Link href="/download">
                            here
                        </Link>
                    </Typography>
                </Pulse>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="flex-start" alignItems="center" direction="row" spacing={2}>
            <Grid item>
                <Pulse>
                <Typography className={[classes.gs_font, classes.lightText]}  variant="h4" >
                  Or visit the website...
                </Typography>
                </Pulse>
              </Grid>
              <Grid item>
                <Pulse>
                    <Typography className={[classes.hoverBold, classes.teal, classes.hoverLight]} variant="h4" >
                        <Link href="https://gs-suite-main.herokuapp.com">
                            @ gs-suite-main.herokuapp.com
                        </Link>
                    </Typography>
                </Pulse>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="thedevs" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
  );
}
