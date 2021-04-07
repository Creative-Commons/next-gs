import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import Link from "next/link";

export default function DownloadApp ({classes}) {
  return (
    <Container className={classes.root} id="download-app">
      <Grid container spacing={2}>
        <Grid item>
          <Typography className={classes.gs_font} variant="h4" >
            Download the app
          </Typography>
        </Grid>
        <Grid item>
        <Typography 
          className={classes.gs_font, classes.teal}
          variant="h4"
          >
          <Link href="#">
              here
          </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
