import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Grow, Fade} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import DevProfile from "../../DevProfile";
import {TiltWrapper} from "../../Tilting";
import Rotate from "react-reveal/Rotate";


export default function TheDevs ({classes}) {
  return (
    <>
    <div className={classes.root} id="thedevs">
      <Container>
        <Grid container alignItems="center" justify="space-around">
          <Grid container justify="space-around" alignItems="center">
            <Grid item xs>
              <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid item>
                  <Fade in timeout={1000}>
                    <>
                  <Typography className={[classes.gs_font]} variant="h2">
                        Meet the
                    </Typography>
                    <Typography className={[classes.gs_font, classes.hoverBold, classes.hoverDark]} variant="h2">
                        Devs...!
                    </Typography>
                    </>
                  </Fade>
                </Grid>
                <Grid item>
                  <Fade in timeout={1000}>
                    <div className={classes.container}>
                      <img className={classes.hoverShadow} height="280"  src="/resources/all_day.webp" />
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
            <Grid container spacing={2} justify="space-around" alignItems="center" spacing={5}>     
                <Grid item>
                      <DevProfile name="Jaisal Shah" classes={classes} github_link="jaisal1311"
                        profile_pic="https://avatars.githubusercontent.com/u/57360897?v=4" />
                </Grid>
                <Grid item>
                      <DevProfile name="San Sequeira" classes={classes}  github_link="sansqra"
                        profile_pic="https://avatars.githubusercontent.com/u/42314542?v=4" />
                </Grid>
                <Grid item>
                    <DevProfile name="Rachit Agrawal" classes={classes}  github_link="rachitagarwa"
                      profile_pic="https://avatars.githubusercontent.com/u/44547447?v=4" />
                </Grid>
                <Grid item>
                    <DevProfile name="Rushik Vadher" classes={classes}  github_link="rushikvadher"
                      profile_pic="https://avatars.githubusercontent.com/u/44158568?v=4" />
                </Grid>
                <Grid item>
                    <DevProfile name="Keane Pereira" classes={classes}  github_link="keane3pereira"
                      profile_pic="https://avatars.githubusercontent.com/u/44158447?v=4" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="support" smooth={true}>
        <IconButton className={classes.scroll_icon_light}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
  );
}


 
{/*<Grid item>
    <DevProfile name="Jaisal Shah" designation="Frontend | Flutter" />
  </Grid> 
  <Grid item>
  <DevProfile name="San Sequeira" profile_pic="https://avatars.githubusercontent.com/u/42314542?v=4" designation="Backend | FastAPI" />
  </Grid>
  <Grid item>
    <DevProfile name="Keane Pereira" designation="Backend | FastAPI" />
  </Grid>
</Grid>
<Grid container justify="space-evenly" alignItems="center">
  <Grid item>
    <Typography className={classes.gs_font}>
        Meet the Devs...!
    </Typography>
  </Grid>
  <Grid item>
    <Typography className={classes.gs_font}>
        Meet the Devs...!
    </Typography>
  </Grid>
*/}