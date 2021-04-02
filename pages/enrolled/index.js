import React from "react";
import API_BASE_URL from "../../constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    Typography, Button, Container, Fade, Divider,
    Backdrop, CircularProgress, Card, CardContent,
    Dialog, DialogActions, DialogContent, DialogTitle,
    DialogContentText, TextField
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
    const [classroomMessage, setClassroomMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [tokenValue, setTokenValue] = useState(undefined);

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
                if (response.data.data != undefined){
                    setClassrooms(response.data.data);
                    setLoading(false);
                } else {
                    setClassroomMessage(response.data.message);
                    setLoading(false);
                }
            }
        }).catch(function(error){
            console.log(error.message);
        });
    }

    function enrollClassroom(){
        setLoading(true);
        axios.post(API_BASE_URL + "/enroll/", {
            "entry_code": tokenValue
        },
        {
            headers: {
                "token": localStorage.getItem("token"),
                "Access-Control-Allow-Origin": "*",
            }
        }).then((response) => {
            console.log(response);
            if (response.data.success === true){
                
            } else {

            }
        }).catch(function(error){
            console.log(error.message);
        });
        handleClose();
        getUserEnrolled();
        setLoading(false);
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {

            router.push("/auth/sign_in")
        } else {
            if(loading){
                setClassrooms([]);
                setClassroomMessage("");
                setTimeout(
                    getUserEnrolled(),
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
                                <Container dis>
                                    <Typography variant="h4" component="h4">
                                        Enrolled Classrooms
                                    </Typography>
                                </Container>
                                <Divider />

                                <Typography variant="body" color="primary">
                                    { classroomMessage }
                                </Typography>
                                <Container>
                                    <Button onClick={handleClickOpen} variant="outlined">
                                        Enroll
                                    </Button>

                                </Container>
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
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Classroom Enrollment</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                To enroll yourself into a classroom, enter the classroom's entry token.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="token"
                                label="Entry Token"
                                type="text"
                                required
                                onChange={e => setTokenValue(e.target.value)}
                                fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={enrollClassroom} color="primary">
                                Enroll
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </main>
                </div>
            </Fade>
        )
    )
}