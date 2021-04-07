import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import Link from "next/link";

export default function DownloadApp ({classes}) {
  return (
    <>
    <div className={classes.root} id="download-app">
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Typography className={classes.gs_font} variant="h4" >
              Download the app
            </Typography>
          </Grid>
          <Grid item>
          <Typography className={classes.gs_font, classes.teal} variant="h4">
            <Link href="https://github.com/GS-Suite">
                here
            </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="header" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandLessOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
  );
}
