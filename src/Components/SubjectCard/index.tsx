import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Subject from '../Subject/Subject.typed';
import UserName from '../../Utils/UserName';
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
    },
  }),
);

const SubjectCard = ({ subject }: any) => {
  const classes = useStyles();

  // Get user type
  const userName = new UserName();
  const name = userName.getName();

  // Set correct page Link
  let route: string;
  if (name === 'admin') route = '/test';
  else route = '/subject/' + subject.id;

  return (
    <Grid item md={4}>
      <Card className={classes.subject}>
        <CardActionArea>
          <Link to={route}>
            <CardMedia image={mockImage} title="Testing" className={classes.media} />
            <CardContent>
              <h2>{subject.name}</h2>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SubjectCard;
