import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import NumberFormat from 'react-number-format';
import CountUP from 'react-countup'
import { Pie } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

export default function GlobalData() {
    const classes = useStyles();
    const [myData, setmydata] = useState([]);
    const [isLoading, setLoading] = useState(false);
    


    useEffect(() => {

        async function fetchData() {

            setLoading(true);
            const api = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const apiJson = await api.json();
            console.log(apiJson);
            setmydata(apiJson);
            setLoading(false);

        }

        fetchData();



    }, [])

    const loading = <Typography color="textSecondary" gutterBottom>loading ...</Typography>
        ;

    if (isLoading) {
        return (
            <div className={classes.root}>
                <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom style={{ color: 'DarkSlateGrey' }}>
                        {loading}
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom style={{ color: 'DarkSlateGrey' }}>
                        Total Cases
                </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom style={{ color: 'green' }}>
                        {loading}
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom style={{ color: 'green' }}>
                        Total Recovered
                </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom style={{ color: 'orange' }}>
                        {loading}
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom style={{ color: 'orange' }}>
                        Total Active
                </Typography>
                </Paper>
                <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom style={{ color: 'red' }}>
                        {loading}
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom style={{ color: 'red' }}>
                        {loading}
                    </Typography>
                </Paper>
            </div>
        )
    }


    
    
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                data: [1,2,3],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        

    




    



    return (
        <div className={classes.root}>
            <Paper elevation={3}>

                <Typography variant="h4" gutterBottom style={{ color: 'DarkSlateGrey' }}>
                    <CountUP
                        start={0}
                        end={myData && myData.results && myData.results[0].total_cases}
                        duration={3}
                        separator=","
                    />
                </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'DarkSlateGrey' }}>
                    Total Cases
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'green' }}>
                    <CountUP
                        start={0}
                        end={myData && myData.results && myData.results[0].total_recovered}
                        duration={3}
                        separator=","
                    />
                </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'green' }}>
                    Total Recovered
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'orange' }}>
                    <CountUP
                        start={0}
                        end={myData && myData.results && myData.results[0].total_unresolved}
                        duration={3}
                        separator=","
                    />
                </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'orange' }}>
                    Total Active
                </Typography>
            </Paper>
            <Paper elevation={3}>
                <Typography variant="h4" gutterBottom style={{ color: 'red' }}>
                    <CountUP
                        start={0}
                        end={myData && myData.results && myData.results[0].total_deaths}
                        duration={3}
                        separator=","
                    />
                </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'red' }}>
                    Total Deaths
                </Typography>


            </Paper>
            <Paper elevation={3}>
                <div>
                    <h2>Pie Example</h2>
                    <Pie data={data} />
                </div>



            </Paper>








        </div>
    );
}
