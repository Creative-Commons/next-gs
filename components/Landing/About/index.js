import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import {Link as Scroll} from "react-scroll";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import LightSpeed from "react-reveal/LightSpeed";


export default function About ({classes}) {
    return (
        <>
        <div className={classes.root} id="about">
            <Container>
                <Grid container>
                    <Grid item>
                        <LightSpeed left>
                        <Typography className={[classes.gs_font]} variant="h2">
                            About...
                        </Typography>
                        </LightSpeed>
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