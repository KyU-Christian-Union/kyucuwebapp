import React, { Suspense, lazy } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuspenseFallBack from '../components/SuspenseFallBack';
import ResourcesArticles from '../components/Resources/ResourcesArticles';
import ResourcesSermons from '../components/Resources/ResourcesSermons';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const EventsPage = lazy(() => import('../pages/EventsPage/EventsPage'));
const SpecificEventPage = lazy(() => import('../pages/SpecificEventPage/SpecificEventPage'));
const MinistriesPage = lazy(() => import('../pages/MinistriesPage/MinistriesPage'));
const PostArticle = lazy(() => import('../pages/PostArticle/PostArticle'));
const ResourcePage = lazy(() => import('../pages/ResourcePage/ResourcePage'));
const MinistryDetails = lazy(() => import('../pages/MinistryDetails/MinistryDetails'));
const GivePage = lazy(() => import('../pages/GivePage/GivePage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const AboutPage = lazy(() => import('../pages/AboutUsFaq/AboutUsPage'));

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
        <Suspense fallback={<SuspenseFallBack />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:name" element={<SpecificEventPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/resources/articles/:name" element={<PostArticle />} />
            <Route path="resources" element={<ResourcePage />}>
              <Route path="sermons" element={<ResourcesSermons />} />
              <Route path="articles" element={<ResourcesArticles />} />
            </Route>
            <Route path="give" element={<GivePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/ministryDetails" element={<MinistryDetails ministryName="ICT" />} />
            <Route path="/contactUs" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
