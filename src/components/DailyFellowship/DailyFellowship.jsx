import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography, Box, Tab, Paper, TableContainer } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { TabContext, TabList } from '@mui/lab';
import useMediaQuery from '@mui/material/useMediaQuery';
import FellowShipData from './FellowShipData';

const useStyles = makeStyles(() => ({
  tabList: {
    '& .MuiTabs-indicator': {
      backgroundColor: 'black'
    }
  }
}));

const DailyFellowship = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
  const MondayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' }
  ];
  const TuesdayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ];
  const WednesdayData = [
    { id: 1, time: '9:00am-11:00am', fellowship: 'Second Service' },
    { id: 2, time: '4:00pm-6:00pm', fellowship: 'Praise & Worship Practice' },
    { id: 3, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ];
  const ThursdayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' },
    { id: 4, time: '4:00pm-6:00pm', fellowship: 'Praise & Worship Practice' },
    { id: 5, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ];
  const FridayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' }
  ];
  const SaturdayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' },
    { id: 4, time: '4:00pm-6:00pm', fellowship: 'Praise & Worship Practice' },
    { id: 5, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ];
  const SundayData = [
    { id: 1, time: '6:00am-7:00am', fellowship: 'Morning Devotion' },
    { id: 2, time: '7:00am-9:00am', fellowship: 'First Service' },
    { id: 3, time: '9:00am-11:00am', fellowship: 'Second Service' },
    { id: 4, time: '4:00pm-6:00pm', fellowship: 'Praise & Worship Practice' },
    { id: 5, time: '7:00pm-8:00pm', fellowship: 'Intercessory Prayers' }
  ];
  const [selectedTab, setSelectedTab] = useState('1');
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Box pt={4} mb={4}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Daily FellowShip Times
        </Typography>
        <TabContext value={selectedTab}>
          <TabList
            onChange={handleChange}
            variant={isSmallScreen ? 'scrollable' : 'fullWidth'}
            scrollButtons={false}
            className={classes.tabList}
            sx={{ backgroundColor: '#FFE4FF' }}
          >
            <Tab
              label="Sunday"
              value="1"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Monday"
              value="2"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Tuesday"
              value="3"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Wednesday"
              value="4"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Thursday"
              value="5"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Friday"
              value="6"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
            <Tab
              label="Saturday"
              value="7"
              sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: '#800080' } }}
            />
          </TabList>
          <TableContainer component={Paper}>
            <FellowShipData value="1" fellowshipdata={SundayData} />
            <FellowShipData value="2" fellowshipdata={MondayData} />
            <FellowShipData value="3" fellowshipdata={TuesdayData} />
            <FellowShipData value="4" fellowshipdata={WednesdayData} />
            <FellowShipData value="5" fellowshipdata={ThursdayData} />
            <FellowShipData value="6" fellowshipdata={FridayData} />
            <FellowShipData value="7" fellowshipdata={SaturdayData} />
          </TableContainer>
        </TabContext>
      </Container>
    </Box>
  );
};

export default DailyFellowship;
