import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import EventsPage from '../pages/EventsPage/EventsPage';

import SpecificEventPage from '../pages/SpecificEventPage/SpecificEventPage';

import MinistriesPage from '../pages/MinistriesPage/MinistriesPage';


const useStyles = makeStyles(() => ({
  root: {
    maxHeight: '100vh'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/events" component={EventsPage} />

          {/** will fetch the id from db to make it dynamic */}
          <Route exact path="/events/:id" component={SpecificEventPage} />

          <Route exact path="/ministries" component={MinistriesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
