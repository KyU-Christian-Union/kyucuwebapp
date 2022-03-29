import React from 'react';
import { TabPanel } from '@mui/lab';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

const FellowShipData = ({ value, fellowshipdata }) => {
  return (
    <TabPanel value={value}>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none'
          }
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: '1.2rem', fontWeight: 900, color: '#2E002E' }}>
              Time
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.2rem', fontWeight: 900, color: '#2E002E' }}>
              Fellowship
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fellowshipdata &&
            fellowshipdata.map(data => (
              <TableRow key={data.id}>
                <TableCell align="center" sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#2E002E' }}>
                  {data.time}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#2E002E' }}>
                  {data.fellowship}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TabPanel>
  );
};
export default FellowShipData;
