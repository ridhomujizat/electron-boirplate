import React, { PureComponent, Suspense }  from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import Home from '../layout/Home'
  class Routes extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        hasError: false,
      };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidMount() {
    }
  

  
    render() {
  
      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          {!this.state.hasError ? (
            <Router>
              <Switch>
                <Route path="/" component={Home} exact />
              </Switch>
            </Router>
          ) : (
            <h1>Error</h1>
          )}
        </Suspense>
      );
    }
  }

  export default Routes