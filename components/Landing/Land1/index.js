import {
    Typography, Collapse, Grid,
    IconButton,
    Container
} from "@material-ui/core";

import {TiltWrapper} from "../../Tilting";
import { Link as Scroll } from 'react-scroll';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";


export default function Land1 ({classes}) {
    return (
        <>
        <div className={classes.root, classes.land_root} id="land-1">
            <Container className={classes.root}>
            </Container>
            <Scroll className={classes.main} to="features1" smooth={true}>
                <IconButton className={classes.scroll_icon_light}>
                    <ExpandMoreOutlinedIcon/>
                </IconButton>
            </Scroll>
        </div>
        </>
    )
}