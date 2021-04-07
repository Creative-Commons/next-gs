import {
    Typography, Collapse, Grid,
    IconButton,
    Fade
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";


export default function Header ({checked, classes}) {
    return (
        <>
        <div className={classes.root} id="header">
            <Fade
                in={checked}
                {...(checked ? { timeout: 1400 } : {})}
            >
            <div className={classes.container}>
                <Typography className={classes.gs_font, classes.teal} variant="h2">
                    Welcome to
                </Typography>                
                <Typography className={classes.gs_font} variant="h1">
                    GS
                </Typography>
                <Grid container spacing={1}>
                    <Grid alignItems="baseline" item>
                        <Typography className={classes.gs_font} variant="h1">
                            Suite
                        </Typography>
                    </Grid>
                    <Grid alignItems="baseline" item>
                        <Typography className={classes.gs_font, classes.teal} variant="h1">
                            .
                        </Typography>
                    </Grid>
                </Grid>
            </div>
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