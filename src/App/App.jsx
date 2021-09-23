import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import EventsPage from '../pages/EventsPage/EventsPage';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
