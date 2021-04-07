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
        <Grid container justify="space-evenly" alignItems="center">
          <Grid container justify="flex-start" direction="column" xs={6}>
            <Grid item>
              <Typography className={classes.gs_font} variant="h2" >
                Download the app
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.gs_font, classes.teal} variant="h2">
                  here...
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
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
              {
                checked ? (
                  <div>
                    <Count label="Total Downloads" number="0" duration="2" classes={classes} />
                  </div>
                ) : (
                  <></>
                )
              }
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
