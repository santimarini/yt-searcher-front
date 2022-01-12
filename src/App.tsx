import React, { useEffect } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import { connect } from 'react-redux';
import { YoutubeClientLoaded } from './store/action-creators/action-creator';
import Search from './components/Search/Search.component';

import { params } from './store/types';

interface IApp extends RouteComponentProps<params> {
  setYoutubeClientLoaded(): void
}

function App(props: IApp) {
  useEffect(() => {
    const { setYoutubeClientLoaded } = props;
    setYoutubeClientLoaded();
  }, [props])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/result" component={Search} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return { setYoutubeClientLoaded: () => { dispatch(YoutubeClientLoaded()) } }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
