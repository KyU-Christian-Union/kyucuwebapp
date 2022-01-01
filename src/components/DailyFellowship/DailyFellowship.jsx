import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography, Stack, TableContainer, Table, TableRow, Paper, TableHead, TableBody } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import data from '../../data';

const DailyFellowship = () => {
  let dayCheck;
  let arrday;
  let dayarrData;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [dayInfo, setdayInfo] = useState([
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' },
    { id: 4, time: '4:00pm-6:00pm', fellowship: 'Praise & Worship Practice' },
    { id: 5, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ]);
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
            <Typography
              key={day}
              sx={{ color: '#800080' }}
              onClick={e => {
                dayCheck = data.filter(el => el.day === e.target.textContent);

                arrday = dayCheck.map(x => x.info);

                dayarrData = arrday[arrday.length - 1];

                setdayInfo(dayarrData);
              }}
            >
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
              {dayInfo.map(row => (
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
