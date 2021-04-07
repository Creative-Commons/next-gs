import { Avatar, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core"
import Link from "next/link";


export default function DevProfile ({name, profile_pic, github_link, classes}) {
    return (
        <div>
        <Card>
            <CardContent variant="outlined">
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Avatar src={profile_pic} className={classes.devAvatar} />
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                </Grid>
            </Grid>
            </CardContent>
            <CardActions>
                <Typography className={classes.teal} variant="body1">
                    <Link href={github_link}>
                        {github_link}
                    </Link>
                </Typography>
            </CardActions>
        </Card>
        </div>
    )
}