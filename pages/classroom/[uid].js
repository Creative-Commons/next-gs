import React from "react";
import API_BASE_URL from "../../constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    Typography, Button, Container, Fade,
    Backdrop, CircularProgress, Card, CardActions
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../../components/navBar";
import SideBar from "../../components/SideBar";


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

export default function Classroom (props) {
    const router = useRouter();
    const { uid } = router.query
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({})

    function getClassroomDetails(){
        axios.post(API_BASE_URL + "/get_classroom_details/",
            {"classroom_uid": uid},
            {
                headers: {
                    "token": localStorage.getItem("token"),
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((response) => {
                console.log(response.data.data)
                if (response.data.success === true){
                    setDetails(response.data.data)
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
                getClassroomDetails();
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
                    <NavBar title="GS-Suite" />
                    <main className={classes.content}>
                        <Container className={classes.content}>
                            <div>
                                <Typography variant="h5">
                                    {details.name}
                                </Typography>
                            </div>
                            {/* <Card className={classes.root} variant="outlined">
                                <CardActions>
                                    <Button color="primary" variant="outlined">
                                        Give Attendance
                                    </Button>
                                    <Button color="primary" variant="outlined">
                                        View Attendance
                                    </Button>
                                </CardActions>
                            </Card> */}
                        </Container>
                    </main>
                </div>
            </Fade>
        )
    )
}