import { useRouter } from "next/router";
import axios from "axios";
import API_BASE_URL from "../../constants";
import { useState } from "react";
import { Button, Fade, TextField, Container, Typography, Grid } from "@material-ui/core";




export default function ResetPasswordPage () {
    const { query } = useRouter();
    const [password, setPassword] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [message, setMessage] = useState("");

    function resetPassword () {
        axios.post(
            API_BASE_URL + "/reset_password/",
            {
                "username": username,
                "password": password,
                "token": query.token
            }
        ).then((response) => {
            console.log(response.data.message);
        }).catch((error) => setMessage("Failed to reset password"));
    }

    return (
        <Fade in={true} timeout={500}>
            <Container style={{flexGrow: 1}}>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3">
                        Reset Password
                        </Typography>
                    </Grid>
                    <Grid>
                        <div style={{paddingRight: 60, paddingLeft: 60}} >
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            onChange={e => setUsername(e.target.value)}
                            name="username"
                            autoFocus
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            />
                            <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => {resetPassword()}}
                            >
                            Reset Password
                            </Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    )
}