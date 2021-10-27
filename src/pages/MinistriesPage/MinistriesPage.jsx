import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AllMinistries from '../../components/AllMinistries/AllMinistries';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import MinistryDetails from '../EachMinistryTemplate/MinistryDetails';

const MinistriesPage = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <PublicAppBar />
      <Switch>
        <Route exact path={`${path}/`} component={AllMinistries} />
        <Route exact path={`${path}/:id`} component={MinistryDetails} />
      </Switch>
      <Footer />
    </>
  );
};
export default MinistriesPage;
