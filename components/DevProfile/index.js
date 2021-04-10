import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import Rotate from "react-reveal/Rotate";
import Link from "next/link";
import { TiltWrapper } from "../Tilting";


export default function DevProfile ({name, profile_pic, github_link, classes}) {
    return (
        <div>
        <Rotate>
            <TiltWrapper>
            <Card className={classes.hoverShadow}>
                <CardContent>
                <Grid container direction="column" alignItems="center" justify="space-around">
                    <Grid item>
                        <Avatar src={profile_pic} className={classes.devAvatar} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.container} variant="h4">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={[classes.bg_teal, classes.roundCorners, classes.hoverShadow]}>
                            <Link href={"https://github.com/" + github_link}>
                                {"@" + github_link}
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
            </TiltWrapper>
        </Rotate>
        </div>
    )
}