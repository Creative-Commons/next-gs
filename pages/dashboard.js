import React from "react";
import API_BASE_URL from "../constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    Typography, Button, Container, Fade,
    Backdrop, CircularProgress
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../components/navBar";
import SideBar from "../components/SideBar";


const useStyles = makeStyles((theme) =>
  ({
    root: {
        display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        marginTop: 20, 
        marginLeft: 110,
        padding: theme.spacing(3),
    },
    profile: {
        alignItems: "center",
        padding: "default",
        alignContent: "center"
        
    },
  })
);

export default function Dashboard (props) {
    const router = useRouter();
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const links = [{
        "label": "Attendance",
    }];

    function getDashboardDetails(){
        axios.post(API_BASE_URL + "/get_user_dashboard/", {},
            {
                headers: {
                    "token": localStorage.getItem("token"),
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((response) => {
                //console.log(response)
                if (response.data.success != true){
                    localStorage.clear();
                    router.push("/auth/sign_in");
                } else {
                    setUserData(response.data.data)
                
                    localStorage.setItem("first_name", response.data.data.first_name);
                    localStorage.setItem("last_name", response.data.data.last_name);
                    localStorage.setItem("username", response.data.data.username);
                    localStorage.setItem("email", response.data.data.email);
                    
                    setLoading(false);
                }
            }).catch(function(error){
                console.log(error.message);
            });
    }
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push("/auth/sign_in")
        } else {
            if(loading){
                setTimeout(
                    getDashboardDetails(),
                    3000
                )
            }
        }
    }, [props]);

    
    return (
        loading ? (
            <Backdrop className={classes.backdrop} open={loading} onClick={() => {setLoading(false)}}>
                <CircularProgress color="inherit" />
            </Backdrop>
        ) : (
            <Fade in={true} timeout={500}>
                <div>
                    <SideBar props={props} />
                    <NavBar title="Dashboard" userData={userData} />
                    <main className={classes.content}>
                        <Container className={classes.content}>
                            <div>
                                <Typography variant="h5">
                                    Hi {userData.first_name}!
                                </Typography>
                            </div>
                        </Container>
                    </main>
                </div>
            </Fade>
        )
    )
}