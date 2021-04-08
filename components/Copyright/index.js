import { Box, Grid, Typography } from "@material-ui/core";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";



export default function Copyright({classes}) {
    return (
        <Box mt={5} className={classes.bg_teal}>
            <Grid container justify="center" spacing={1} alignItems="center">
                <Grid item>
                    <Typography className={[classes.lightText, classes.hoverBold]} variant="body2" color="textSecondary" align="center">
                        {'Copyright'}
                    </Typography>
                </Grid>
                <Grid item>
                    <CopyrightOutlinedIcon className={classes.hoverBold} />
                </Grid>
                <Grid item>
                    <Typography className={[classes.lightText, classes.hoverBold]} variant="body2" color="textSecondary" align="center">
                        {'GS-Suite '}
                        {new Date().getFullYear()}
                        {' .'}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
  }