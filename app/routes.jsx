import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchVoteData, fetchFicheData} from 'fetch-data';
import { App, Vote, Dashboard, About, LoginOrRegister, Fiche, DetailedFiche, Playlist } from 'pages';
/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
          <Route path="/" component={App}>
            <IndexRoute component={Fiche} fetchData={fetchFicheData} />
              <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
              <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
              <Route path="about" component={About} />
              <Route path="fiches">
                <IndexRoute component={Fiche} fetchData={fetchFicheData} />
                <Route path="/fiches/fiche/:ficheId" component={DetailedFiche}/>
              </Route>
              <Route path="playlists" component={Playlist} />
          </Route>
  );
};