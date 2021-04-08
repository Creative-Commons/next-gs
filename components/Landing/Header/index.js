import {
    Typography, Collapse, Grid,
    IconButton,
    Fade,
    Container,
    Box
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { TiltWrapper } from "../../Tilting";


export default function Header ({classes}) {
    return (
        <>
        <div className={classes.root} id="header">
            <Container>
                <Grid container justify="space-evenly" alignItems="center">
                    <Fade in timeout={700}>
                        <Grid item xs={6}>
                            <Grid item>
                                <Typography className={classes.teal} variant="h2">
                                    Welcome to
                                </Typography>   
                            </Grid>
                            <Grid item>
                                <TiltWrapper options={{ max: 25 }}>
                                    <Typography className={classes.title} variant="h1">
                                        GS
                                    </Typography>
                                    <Grid container spacing={1} alignItems="baseline">
                                        <Grid item>
                                            <Typography className={classes.title} variant="h1">
                                                Suite
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={[classes.title, classes.teal]} variant="h1">
                                                .
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TiltWrapper>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid item>
                            <img className={classes.hoverShadow} src="/resources/gleam_n_grow.webp" />
                        </Grid>
                    </Fade>
                </Grid>
            </Container>
        </div>
        <Scroll className={classes.main} to="land-1" smooth={true}>
            <IconButton className={classes.scroll_icon_dark}>
                <ExpandMoreOutlinedIcon />
            </IconButton>
        </Scroll>
        </>
    )
}