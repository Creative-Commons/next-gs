import { useRouter } from "next/router";
import axios from "axios";
import API_BASE_URL from "../../constants";
import { useState } from "react";
import { Button, Fade, TextField, Container, Typography } from "@material-ui/core";




export default function ResetPasswordPage () {
    const { query } = useRouter();
    const [password, setPassword] = useState(undefined);
    const [username, setUsername] = useState(undefined)

    function resetPassword () {
        axios.post(
            API_BASE_URL + "/reset_password/",
            {
                "username": username,
                "password": password,
                "token": query.token
            }
        ).then((response) => {
            console.log(response);
        }).catch((error) => console.log(error));
    }

    return (
        <Fade in={true} timeout={500}>
            <Container style={{flexGrow: 1}}>
                <Typography variant="h5">
                  Reset Password
                </Typography>
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
                      color="primary"
                      onClick={() => {resetPassword()}}
                    >
                      Sign In
                    </Button>
                </div>
            </Container>
        </Fade>
    )
}