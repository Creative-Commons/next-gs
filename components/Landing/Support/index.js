import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Card, CardContent} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { Button} from '@material-ui/core';
import Link from "next/link";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade"


export default function Support ({classes}) {
  return (
    <>
    <div className={classes.root} id="support">
      <Container>
        <Grid container alignItems="center" justify="space-around">
          <Grid item>
            <LightSpeed left>
            <Typography className={classes.hoverBold} variant="h2">
                Support...
            </Typography>
            </LightSpeed>
          </Grid>
          <Grid item>
            <Grid container direction="column" justify="space-around" alignItems="center">
            <Grid item>
              <Fade>
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
                      <Typography className={[classes.teal, classes.hoverBold]} variant="h4">
                        <Link href="mailto:gs.test.suite@gmail.com">
                            gs.test.suite@gmail.com
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              </Fade>
            </Grid>
            <Grid item>
              <div className={classes.container}>
                  <img className={classes.hoverShadow} height="350" src="/resources/pencil.webp" />
              </div>
            </Grid>
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
