import React from 'react';
import Container from '@mui/material/Container';
import { Typography, Stack, TableContainer, Table, TableRow, Paper, TableHead, TableBody } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

function createData(id, time, fellowship) {
  return { id, time, fellowship };
}
const rows = [
  createData(1, '6:00am-7:00am', 'Morning Devotion'),
  createData(2, '7:00am-9:00am', 'First Service'),
  createData(3, '9:00am-11:00am', 'Second Service'),
  createData(4, '4:00pm-6:00pm', 'Praise & Worship Practise'),
  createData(5, '7:00pm-8:00pm', 'Intercessory Prayers')
];

const DailyFellowship = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div>
      <Container maxWidth="lg">
        <Typography align="center" gutterBottom variant="h2">
          Daily FellowShip Times
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            overflowX: 'auto',
            backgroundColor: '#FFE4FF',
            padding: 3,
            justifyContent: 'space-between'
          }}
        >
          {days.map(day => (
            <Typography key={day} sx={{ color: '#800080' }}>
              {day}
            </Typography>
          ))}
        </Stack>
        <TableContainer component={Paper}>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none'
              }
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: '1.2rem', fontWeight: 900 }}>
                  Time
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '1.2rem', fontWeight: 900 }}>
                  Fellowship
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="center" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                    {row.time}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                    {row.fellowship}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default DailyFellowship;
