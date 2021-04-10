import {
    Typography, Collapse, Grid,
    IconButton,
    Container
} from "@material-ui/core";

import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import {TiltWrapper} from "../../Tilting";
import { Link as Scroll } from 'react-scroll';
import Slide from "react-reveal/Slide";


export default function Features1 ({classes}) {
    return (
        
    <>
    <div className={classes.root} id="features1">
      <Container>
      <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={6}>
            <Slide left>
                <Typography className={[classes.teal, classes.hoverBold]} variant="h2" >
                    Share...
                </Typography>
            </Slide>
            <Slide left>
                <Typography className={classes.gs_font} variant="h5" >
                    Create classrooms, invite students & add video lectures... share your ideas and help others grow...!
                </Typography>
                </Slide>
            </Grid>
            <Grid item xs={6}>
                <TiltWrapper options={{ max: 25 }}>
                    <img height="300vh" src="/resources/features_1_1.jpg"/>
                </TiltWrapper>
            </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={6}>
                <TiltWrapper options={{ max: 25 }}>
                    <img height="300vh" src="/resources/codeing.webp"/>
                </TiltWrapper>
            </Grid>
            <Grid item xs={6}>
                <Slide right>
                <Typography className={[classes.teal, classes.hoverBold]} variant="h2" >
                Discuss...
                </Typography>
                </Slide>
                <Slide right>
                <Typography className={classes.gs_font} variant="h5" >
                Communicate with your classmates through a forum... Get access to learning resources and much more...!
                </Typography>
                </Slide>
            </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="downloads" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
    )
}