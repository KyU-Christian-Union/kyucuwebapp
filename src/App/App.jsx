import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import EventsPage from '../pages/EventsPage/EventsPage';
import ResourcePage from '../pages/ResourcePage/ResourcePage';
import SpecificEventPage from '../pages/SpecificEventPage/SpecificEventPage';
import MinistriesPage from '../pages/MinistriesPage/MinistriesPage';
import PostArticle from '../pages/PostArticle/PostArticle';

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
          <Route exact path="/events/:id" component={SpecificEventPage} />
          <Route exact path="/ministries" component={MinistriesPage} />
          <Route path="/resources" component={ResourcePage} />
          <Route exact path="/resources/articles/:name" component={PostArticle} />
          <Route exact path="/recentposts/article/:name" component={PostArticle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
