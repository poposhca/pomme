import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Subject from './domain';
// Mock image
import mockImage from '../../mock/subject-img-mock.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        subject: {
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
        media: {
            height: theme.spacing(15),
        }
    })
);

const Subjects = ({ subjects }: any) => {
    const classes = useStyles();

    let rowsNumber = Math.floor(subjects.length / 3);
    console.log(rowsNumber)
    if (subjects.length % 3 > 0) rowsNumber += 1;
    console.log(rowsNumber)

    const subjectRows = [];
    for (let i = 0; i < rowsNumber; i++) {
        const newRow = subjects.slice(i*3, i*3+3);
        subjectRows.push(newRow);
    }

    return (
        <Grid container justify="center" spacing={4}>
            {subjectRows.map((row: any) => (
                <Grid item md={12}>
                    <Grid container justify="space-evenly">
                        {row.map((subject: Subject) => (
                            <Grid item md={4}>
                                <Card className={classes.subject}>
                                    <CardActionArea>
                                        <Link to={'/subject/'+subject.id} >
                                            <CardMedia
                                                image={mockImage}
                                                title="Testing"
                                                className={classes.media}
                                            />
                                            <CardContent>
                                                <h2>{subject.name}</h2>
                                            </CardContent>
                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default Subjects;
