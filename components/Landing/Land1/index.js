import {
    Typography, Collapse, Grid,
    IconButton,
    Container
} from "@material-ui/core";

import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";


export default function Land1 ({classes}) {
    return (
        <>
        <div className={[classes.land_root]} id="land-1">
            <Container className={classes.root}>
                <div></div>
            </Container>
            <Scroll className={classes.main} to="about" smooth={true}>
                <IconButton className={classes.scroll_icon_light}>
                    <ExpandMoreOutlinedIcon/>
                </IconButton>
            </Scroll>
        </div>
        </>
    )
}