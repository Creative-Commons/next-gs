import {
    Typography, Collapse, Grid,
    IconButton,
    Container
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default function Header ({classes}) {
    return (
        <div className={classes.root, classes.top_root} id="land-1">
            <Container className={classes.root}>
            </Container>
            <Scroll className={classes.main} to="download-app" smooth={true}>
                <IconButton className={classes.scroll_icon_light}>
                    <ExpandMoreIcon/>
                </IconButton>
            </Scroll>

        </div>

    )
}