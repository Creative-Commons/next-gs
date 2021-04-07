import { AppBar, Button, Grid, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import Link from "next/link";


const useStyles = makeStyles(() => ({
    app_bar: {
        background: "#1e1e1e",
    },
    navButtons: {
        color: teal[400],
        fontFamily: ["Montserrat"],
        '&:hover': {
            boxShadow: 'none',
            color: "#f3f3f3",
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
  }));

export default function NavBar () {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar id="back-to-top-anchor" variant="dense">
                    <Grid container justify="space-evenly" alignItems="center">
                        <Grid item><Scroll className={classes.navButtons} to="features1" smooth>
                            <Button className={classes.navButtons}>
                                About
                            </Button>
                        </Scroll></Grid>
                        <Grid item><Scroll className={classes.navButtons} to="downloads" smooth>
                        <Button className={classes.navButtons}>
                                Downloads
                            </Button>
                        </Scroll></Grid>
                        <Grid item>
                            <Button className={classes.navButtons}>
                                <Link href="#">
                                    Main Website
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item><Scroll className={classes.navButtons} to="thedevs" smooth>
                            <Button className={classes.navButtons}>
                                The Team
                            </Button>
                        </Scroll></Grid>
                        <Grid item><Scroll className={classes.navButtons} to="support" smooth>
                            <Button className={classes.navButtons}>
                                Support
                            </Button>
                        </Scroll></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}