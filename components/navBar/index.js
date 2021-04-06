
import React from "react";
import API_BASE_URL from "../../constants";
import { useRouter } from "next/router";
import {
    Typography, Button, Link,
    AppBar, Toolbar, Popper, Paper, ClickAwayListener, Grow, 
    MenuList, Card, CardContent, CardActions
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 230;

const useStyles = makeStyles((theme) =>
  ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    content: {
        marginTop: 20,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#1e1e1e",
    },
  })
);


const NavBar = ({userIn}) => {
    const classes = useStyles()
    const router = useRouter()
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const signOut = (event) => {
        console.log("sign out");
        axios.post(API_BASE_URL + "/sign_out/", {},
        {
            "headers": {
                "token": localStorage.getItem("token"),
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response) => {
            //console.log(response)
        }).catch(function(error){
            console.log(error.message);
        });
        localStorage.clear();
        router.push("/auth/sign_in");
        event.preventDefault();
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }

    setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
    }

    prevOpen.current = open;
    }, [open]);

    return (
        
            <AppBar position="fixed"
                className={
                    classes.appBar
                }>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        GS-Suite
                    </Typography>
                    {
                        userIn ? (
                            <>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>                            
                                            <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    {localStorage.getItem("first_name")} {localStorage.getItem("last_name")}
                                                </Typography>
                                                <Typography className={classes.title} color="textSecondary">
                                                    {localStorage.getItem("username")}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button fullWidth color="secondary" variant="outlined">View Profile</Button>
                                            </CardActions>
                                            <CardActions>
                                                <Button fullWidth onClick={(event) => signOut(event)} color="secondary" variant="outlined">Sign Out</Button>
                                            </CardActions>
                                            </Card>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Grow>
                                )}
                            </Popper>
                            
                            <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                                <AccountCircleIcon 
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle} />
                            </IconButton>
                        </>
                        ) : (<></>)
                    }              
                </Toolbar>
            </AppBar>
    )
}

export default NavBar;