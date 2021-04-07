import React from 'react';
import useWindowPosition from '../../../hook/useWindowPosition';
import { Container, Grid, Typography, IconButton} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";


export default function Support ({classes}) {
  return (
    <>
    <div className={classes.root} id="support">
      <Container>
          <Typography variant="h2">
              Support
          </Typography>
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
