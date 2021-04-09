import { AppBar, Button, Grid, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import Link from "next/link";

import {linkData} from "./linkData";


const useStyles = makeStyles(() => ({
    app_bar: {
        background: "#1e1e1e",
    },
    navButtons: {
        color: teal[400],
        fontFamily: ["Montserrat"],
        transitionDuration: 500,
        '&:hover': {
            boxShadow: 'none',
            color: "#f3f3f3",
            transitionDuration: 500,
        },
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    teal: {
      color: teal[400]
    },
    teal_dark: {
      color: teal[800]
    },
    hoverBold:{
      fontFamily: ["Montserrat"],
      transitionDuration: 500,
      '&:hover': {
        fontFamily: ["Montserrat"],
        letterSpacing: 5,
        fontWeight: "bold",
        transitionDuration: 500
      },
    },
  }));

export default function NavBar () {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar id="back-to-top-anchor" variant="dense">
                    <Grid container justify="space-evenly" alignItems="center">
                        {
                            linkData.map((item, index) => (
                                <Grid item><Scroll to={item.link_to} smooth>
                                    <Button className={classes.navButtons}>
                                        <Typography className={classes.hoverBold}>
                                            {item.label}
                                        </Typography>
                                    </Button>
                                </Scroll></Grid>
                            ))
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}