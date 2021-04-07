import {
    Typography, Collapse, Grid,
    IconButton,
    Container
} from "@material-ui/core";

import Link from "next/link";
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";


export default function Features1 ({classes}) {
    return (
        
    <>
    <div className={classes.root} id="features1">
      <Container>
      <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={6}>
                <Typography className={classes.gs_font, classes.teal} variant="h3" >
                    Teach!
                </Typography>
                <Typography className={classes.gs_font} variant="h5" >
                    Create classrooms, enroll students, add video lectures, and much more!
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img height="300vh" src="/resources/features_1_1.jpg"/>
            </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={6}>
                <img height="300vh" src="/resources/features_1_2.jpg"/>                
            </Grid>
            <Grid item xs={6}>
                <Typography className={classes.gs_font, classes.teal} variant="h3" >
                Learn!
                </Typography>
                <Typography className={classes.gs_font} variant="h5" >
                Join classrooms, get access to learning resources, and much more!
                </Typography>
            </Grid>
        </Grid>
      </Container>
    </div>
    <Scroll className={classes.main} to="download-app" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
    )
}