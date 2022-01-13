import React, { Suspense, lazy } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const EventsPage = lazy(() => import('../pages/EventsPage/EventsPage'));
const SpecificEventPage = lazy(() => import('../pages/SpecificEventPage/SpecificEventPage'));
const MinistriesPage = lazy(() => import('../pages/MinistriesPage/MinistriesPage'));
const PostArticle = lazy(() => import('../pages/PostArticle/PostArticle'));
const ResourcePage = lazy(() => import('../pages/ResourcePage/ResourcePage'));
const MinistryDetails = lazy(() => import('../pages/MinistryDetails/MinistryDetails'));
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
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                marginTop: 10
              }}
            >
              Loading...
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/events/:name" component={SpecificEventPage} />
            <Route exact path="/ministries" component={MinistriesPage} />
            <Route path="/resources/articles/:name" component={PostArticle} />
            <Route path="/resources" component={ResourcePage} />
            {/* <Route exact path="/ministryDetails" component={MinistryDetails} /> */}
            <Route exact path="/ministryDetails" component={MinistryDetails}>
              <MinistryDetails ministryName="ICT" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
