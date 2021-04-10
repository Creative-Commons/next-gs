import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import {Link as Scroll} from "react-scroll";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import LightSpeed from "react-reveal/LightSpeed";
import Swing from "react-reveal/Swing";


export default function About ({classes}) {
    return (
        <>
        <div className={classes.root} id="about">
            <Container>
                <Grid container direction="row" justify="space-around">
                    <Grid classes={classes.container} item>
                        <Grid container direction="column">
                            <Grid item>
                                <LightSpeed left>
                                    <Typography className={[classes.gs_font]} variant="h2">
                                        A place to
                                    </Typography>
                                </LightSpeed>
                            </Grid>
                            <Grid item>
                                <LightSpeed left>
                                <Typography className={[classes.teal, classes.hoverBold]} variant="h3">
                                    teach...
                                </Typography>
                                </LightSpeed>
                            </Grid>
                            <Grid item>
                                <LightSpeed left>
                                <Typography className={[classes.teal, classes.hoverBold]} variant="h3">
                                    learn...
                                </Typography>
                                </LightSpeed>
                            </Grid>
                            <Grid item>
                                <LightSpeed left>
                                <Typography className={[classes.teal, classes.hoverBold]} variant="h3">
                                    grow...
                                </Typography>
                                </LightSpeed>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Swing>
                        <Grid item>
                            <img className={classes.bg_teal} src="/resources/idea_grow.webp" />
                        </Grid>
                        </Swing>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <Scroll className={classes.main} to="features1" smooth={true}>
            <IconButton className={classes.scroll_icon_dark}>
                <ExpandMoreOutlinedIcon />
            </IconButton>
        </Scroll>
        </>
    );
}