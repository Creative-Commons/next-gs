import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Slide, Fade} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import DevProfile from "../../DevProfile";


export default function TheDevs ({classes}) {
  return (
    <>
    <div className={classes.root} id="thedevs">
      <Container>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid container justify="space-evenly" alignItems="center">
          <Grid item>
            <Fade in timeout={1000}>
              <Typography className={classes.gs_font} variant="h2">
                  Meet the Devs...!
              </Typography>
            </Fade>
            </Grid>
            <Grid item xs={7}>
            <Grid container spacing={10} padding={5} justify="space-evenly" alignItems="center">                
            <Slide in timeout={1000} direction="down">
                <Grid item>
                  <DevProfile name="Jaisal Shah" classes={classes} github_link="https://github.com/jaisal1311"
                    profile_pic="https://avatars.githubusercontent.com/u/57360897?v=4" />
                </Grid>
                </Slide>
                <Slide in timeout={1000} direction="left">
                <Grid item>
                  <DevProfile name="San Sequeira" classes={classes}  github_link="https://github.com/sansqra"
                    profile_pic="https://avatars.githubusercontent.com/u/42314542?v=4" />
                </Grid>
                </Slide>
              </Grid>
              <Grid container spacing={10} justify="space-evenly" alignItems="center">
              <Slide in timeout={1000} direction="up">
                <Grid item>
                  <DevProfile name="Keane Pereira" classes={classes}  github_link="https://github.com/keane3pereira"
                    profile_pic="https://avatars.githubusercontent.com/u/44158447?v=4" />
                </Grid>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="support" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
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