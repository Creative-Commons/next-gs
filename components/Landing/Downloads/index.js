import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import {TiltWrapper} from "../../Tilting"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Link from "next/link";
import apkData from "./apkData";
import Count from "../../Count";


export default function DownloadApp ({checked, classes}) {
  return (
    <>
    <div className={classes.root} id="downloads">
      <Container>
        <Grid container justify="space-evenly" alignItems="center" spacing={2}>
          <Grid item>
            <Grid container justify="flex-start" direction="column" spacing={2}>
              <Grid item>
                <Typography className={classes.gs_font} variant="h2" >
                  Download the app
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={[classes.teal, classes.hoverBold]} variant="h2">
                    here...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" justify="space-evenly" spacing={2}>
            <div className={classes.hoverShadow}>
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
                    {apkData.map((row, index) => (
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
    <Scroll className={classes.main} to="thedevs" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
  );
}
