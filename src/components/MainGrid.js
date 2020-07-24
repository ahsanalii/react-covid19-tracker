import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'
import CountryData from './CountryData'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MainGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                   
                    <Paper className={classes.paper}>
                        <Typography variant="h5" color="textSecondary"  gutterBottom>WORLDWIDE STATS</Typography>
                        <GlobalData />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" color="textSecondary"  gutterBottom>PAKISTAN STATS</Typography>
                        <CountryData />
                    </Paper>
                </Grid>

            </Grid>

        </div>
    );
}
