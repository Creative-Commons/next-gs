import {
    Typography, Collapse, Grid,
    IconButton
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default function Header ({checked, classes}) {
    return (
        <div className={classes.root} id="header">
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1400 } : {})}
                collapsedHeight={100}
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
            
            <Scroll className={classes.main} to="land-1" smooth={true}>
                <IconButton className={classes.scroll_icon_dark}>
                    <ExpandMoreIcon />
                </IconButton>
            </Scroll>
        </Collapse>
      </div>
    )
}