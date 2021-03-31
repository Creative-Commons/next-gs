import React from "react";
import API_BASE_URL from "../../constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    Typography, Button, Container, Fade,
    Backdrop, CircularProgress, Card, CardContent
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "../../components/navBar";
import SideBar from "../../components/SideBar";
import Link from "next/link";


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


export default function Enrolled (props) {
    const router = useRouter();
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [classrooms, setClassrooms] = useState([]);

    function getUserEnrolled(){
        axios.post(API_BASE_URL + "/get_user_enrolled/", {},
            {
                headers: {
                    "token": localStorage.getItem("token"),
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((response) => {
                console.log(response)
                if (response.data.success === true){
                    console.log(response.data.data);
                    if (response.data.data !== []){
                        setClassrooms(response.data.data);
                        setLoading(false)
                    }
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
                getUserEnrolled();
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
                                <Typography variant="h4" component="h4">
                                    Enrolled Classrooms
                                </Typography>
                                {
                                    classrooms.map((item, index) => (
                                        <div>
                                            <Link href={"/classroom/" + item.uid}>
                                                <Button>
                                                <Card className={classes.root} variant="outlined">
                                                <CardContent>
                                                    <Typography variant="title" component="h2" color="primary" gutterBottom>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body">
                                                        Teacher: {item.teacher.name}
                                                    </Typography>
                                                </CardContent>
                                                </Card>
                                                </Button>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </Container>
                    </main>
                </div>
            </Fade>
        )
    )
}