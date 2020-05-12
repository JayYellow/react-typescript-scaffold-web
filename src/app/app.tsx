import React from 'react';
import { Redirect, Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './errorBoundary';
import AppContainer from './appContainer';
import routerConfigs from '../constants/routerConfig';
import { RouterItemType } from '../types/types';
import GlobalStyle from './globalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <BrowserRouter>
          <AppContainer>
            <Switch>
              <Redirect exact={true} from="/" to="/home" />
              {routerConfigs.map((item: RouterItemType, index: number) => {
                return <Route exact={true} path={`/${item.router}`} component={item.component} key={index} />;
              })}
            </Switch>
          </AppContainer>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default App;
