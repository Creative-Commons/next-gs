import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Card, CardContent} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { Button} from '@material-ui/core';


export default function Support ({classes}) {
  return (
    <>
    <div className={classes.root} id="support">
      <Container>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid container justify="flex-start">
            <Typography className={classes.gs_font} variant="h2">
                Support
            </Typography>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography>
                  Contact
                </Typography>
              </CardContent>
            </Card>
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
