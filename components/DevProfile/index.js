import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import Link from "next/link";


export default function DevProfile ({name, profile_pic, github_link, classes}) {
    return (
        <div>
        <Card>
            <CardContent variant="outlined">
            <Grid container direction="column" justify="space-evenly" alignItems="center">
                <Grid item>
                    <Avatar src={profile_pic} className={classes.devAvatar} />
                </Grid>
                <Grid item>
                    <Typography className={classes.container} variant="h4">
                        {name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.bg_teal} variant="body1">
                        <Link href={github_link}>
                            {github_link}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
        </div>
    )
}