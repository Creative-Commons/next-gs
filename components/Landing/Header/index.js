import {
    Typography, Collapse, Grid,
    IconButton,
    Fade,
    Container,
    Box
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { TiltWrapper, Wrapper, InnerWrapper } from "../../Tilting";


export default function Header ({checked, classes}) {
    return (
    <>
    <div className={classes.root} id="header">
            <Fade in timeout={1400} >
            <Container>
                <Grid container direction="column" justify="flex-start">
                    <Grid item xs={6}>
                    <Wrapper>
                    <InnerWrapper>
                    <Typography className={classes.gs_font, classes.teal} variant="h4">
                        Welcome to
                    </Typography>  
                    <TiltWrapper options={{ max: 25 }}>
                        <Typography className={classes.title} variant="h1">
                            GS
                        </Typography>
                        <Grid container spacing={1} variant="h1">
                            <Grid alignItems="baseline" item>
                                <Typography className={classes.title}>
                                    Suite
                                </Typography>
                            </Grid>
                            <Grid alignItems="baseline" item>
                                <Typography className={classes.title, classes.teal} variant="h1">
                                    .
                                </Typography>
                            </Grid>
                        </Grid>
                        </TiltWrapper>
                    </InnerWrapper>
                </Wrapper>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    </div>
    <Scroll className={classes.main} to="land-1" smooth={true}>
        <IconButton className={classes.scroll_icon_dark}>
            <ExpandMoreOutlinedIcon />
        </IconButton>
    </Scroll>
    </>
    )
}