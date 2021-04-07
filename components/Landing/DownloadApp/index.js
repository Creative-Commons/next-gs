import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import Link from "next/link";
import apkData from "./apkData";


export default function DownloadApp ({classes}) {
  return (
    <>
    <div className={classes.root} id="download-app">
      <Container>
        <Grid
          container spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="center">
          <Grid container spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="center" xs={12} sm={6}>
            <Grid item>
              <Typography className={classes.gs_font} variant="h4" >
                Download the app
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.gs_font, classes.teal} variant="h4">
                  here
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.darkBackground}>
                <TableRow>
                <TableCell className={classes.teal} align="center">Device</TableCell>
                <TableCell className={classes.teal} align="center">Download Link</TableCell>
                <TableCell className={classes.teal} align="center">Hash</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apkData.map((row) => (
                  <TableRow key={row.name}>
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
