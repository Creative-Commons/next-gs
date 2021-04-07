import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton, Button} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";


export default function TheDevs ({classes}) {
  return (
    <>
    <div className={classes.root} id="thedevs">
      <Container>
          <Typography variant="h2">
              Meet the Devs!
          </Typography>
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
