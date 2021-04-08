import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import Rotate from "react-reveal/Rotate";
import Link from "next/link";
import { TiltWrapper } from "../Tilting";


export default function DevProfile ({name, profile_pic, github_link, classes}) {
    return (
        <div>
        <Rotate>
            <TiltWrapper>
            <Card>
                <CardContent>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Avatar src={profile_pic} className={classes.devAvatar} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.container} variant="h4">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div>
                            <Typography className={classes.bg_teal} variant="subtitle2">
                                <Link href={github_link}>
                                    {github_link}
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
            </TiltWrapper>
        </Rotate>
        </div>
    )
}