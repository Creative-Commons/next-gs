import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Card, CardContent} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { Button} from '@material-ui/core';
import Link from "next/link";
import { TiltWrapper } from '../../Tilting';


export default function Support ({classes}) {
  return (
    <>
    <div className={classes.root} id="support">
      <Container>
        <Grid container alignItems="center" justify="space-around">
          <Grid item justify="flex-start">
            <Typography className={classes.gs_font} variant="h2">
                Support
            </Typography>
          </Grid>
          <Grid item direction="column" justify="space-around" alignItems="center" xs={6}>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant="h4">
                    Have any queries?
                  </Typography>
                  <Typography variant="h5">
                    We'd love to help you out!
                  </Typography>
                  </CardContent>
                  <CardContent>
                  <Grid container justify="flex-start" alignItems="baseline" spacing={1}>
                    <Grid item>
                      <Typography variant="h4">
                        Write to us at...
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.teal} variant="h4">
                        <Link href="mailto:gs.test.suite@gmail.com">
                            gs.test.suite@gmail.com
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <div className={classes.container}>
                <TiltWrapper>
                  <img height="200" src="/resources/pencil.webp" />
                </TiltWrapper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} padding="10" to="header" smooth={true}>
      <Button
          className={classes.scroll_icon_dark}
          endIcon={
            <ExpandLessOutlinedIcon />
          }
        >
        Back to Top
      </Button>
    </Scroll>
    </>
  );
}
