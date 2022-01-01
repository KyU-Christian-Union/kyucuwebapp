function createData(id, time, fellowship) {
  return { id, time, fellowship };
}
export default [
  {
    id: 1,
    selected: true,
    day: 'Sunday',
    info: [
      createData(1, '6:00am-7:00am', 'Morning Devotion'),
      createData(2, '7:00am-9:00am', 'First Service'),
      createData(3, '9:00am-11:00am', 'Second Service'),
      createData(4, '4:00pm-6:00pm', 'Praise & Worship Practise'),
      createData(5, '7:00pm-8:00pm', 'Intercessory Prayers')
    ]
  },
  {
    id: 2,
    selected: false,
    day: 'Monday',
    info: [createData(1, '6:00am-7:00am', 'Morning Devotion'), createData(2, '7:00pm-8:00pm', 'Intercessory Prayers')]
  },
  {
    id: 3,
    selected: false,
    day: 'Tuesday',
    info: [createData(1, '6:00am-7:00am', 'Morning Devotion'), createData(2, '5:00pm-7:00pm', 'Intercessory Prayers')]
  },
  {
    id: 4,
    selected: false,
    day: 'Wednesday',
    info: [createData(1, '6:00am-7:00am', 'Morning Devotion'), createData(2, '3:00pm-5:00pm', 'Intercessory Prayers')]
  },
  {
    id: 5,
    selected: false,
    day: 'Thursday',
    info: [createData(1, '6:00am-7:00am', 'Morning Devotion'), createData(2, '2:00pm-5:00pm', 'Intercessory Prayers')]
  },
  {
    id: 6,
    selected: false,
    day: 'Friday',
    info: [createData(1, '7:00am-8:00am', 'Morning Devotion'), createData(2, '5:00pm-7:00pm', 'Intercessory Prayers')]
  },
  {
    id: 7,
    selected: false,
    day: 'Saturday',
    info: [createData(1, '6:00am-7:00am', 'Morning Devotion'), createData(2, '5:00pm-8:00pm', 'Intercessory Prayers')]
  }
];
