import { AppBar, Button, Grid, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import { Link as Scroll } from 'react-scroll';
import Link from "next/link";


const useStyles = makeStyles(() => ({
    app_bar: {
        background: "#f3f3f3",
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
                <Toolbar>
                    <Grid container justify="space-evenly" alignItems="center">
                        <Grid item><Scroll className={classes.teal_dark} to="features1" smooth>
                            <Button className={classes.teal_dark}>
                                About
                            </Button>
                        </Scroll></Grid>
                        <Grid item><Scroll className={classes.teal_dark} to="downloads" smooth>
                        <Button className={classes.teal_dark}>
                                Downloads
                            </Button>
                        </Scroll></Grid>
                        <Grid item>
                            <Button className={classes.teal_dark}>
                                <Link href="#">
                                    Main Website
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item><Scroll className={classes.teal_dark} to="support" smooth>
                            <Button className={classes.teal_dark}>
                                Support
                            </Button>
                        </Scroll></Grid>
                        <Grid item><Scroll className={classes.teal_dark} to="thedevs" smooth>
                            <Button className={classes.teal_dark}>
                                The Team
                            </Button>
                        </Scroll></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}