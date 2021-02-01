import React from 'react';
import Grid from '@material-ui/core/Grid';
import SubjectCard from '../SubjectCard';
import Subject from './domain';

const Subjects = ({ subjects }: any) => {
  let rowsNumber = Math.floor(subjects.length / 3);
  console.log(rowsNumber);
  if (subjects.length % 3 > 0) rowsNumber += 1;
  console.log(rowsNumber);

  const subjectRows = [];
  for (let i = 0; i < rowsNumber; i++) {
    const newRow = subjects.slice(i * 3, i * 3 + 3);
    subjectRows.push(newRow);
  }

  return (
    <Grid container justify="center" spacing={4}>
      {subjectRows.map((row: Array<Subject>, i: number) => (
        // Map rows to show
        <Grid item key={`row-${i}`} md={12}>
          <Grid container justify="space-evenly">
            {/* Map subjects in each row */}
            {row.map((subject: Subject) => (
              <SubjectCard subject={subject} key={subject.name} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Subjects;
