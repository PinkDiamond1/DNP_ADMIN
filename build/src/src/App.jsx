import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "react-error-boundary";

import Home from "./components/Home";
import NonAdmin from "./components/NonAdmin";
import NonAdminRedirector from "./components/NonAdminRedirector";
import Notifications from "./components/Notifications";

// Testing redux
import dashboard from "./dashboard";
import devices from "./devices";
import installer from "./installer";
import packages from "./packages";
import system from "./system";
import status from "./status";
import chains from "./chains";
import navbar from "./navbar";

// Redux

import { ToastContainer } from "react-toastify";

// Init css
import "./include/bootstrap";
import "./sb-admin.css";
import "./admin_UI.css";
// APIs

export default class App extends React.Component {
  // App is the parent container of any other component.
  // If this re-renders, the whole app will. So DON'T RERENDER APP!
  // Check ONCE what is the status of the VPN, then display the page for nonAdmin
  // Even make the non-admin a route and fore a redirect

  render() {
    return (
      <div className="wrapper fixed-nav">
        <navbar.component />
        <div className="content-wrapper dappnode-background">
          <div className="container-fluid app-content">
            <ErrorBoundary>
              <Notifications />
              <Route exact path="/" component={Home} />
              <Route
                path={"/" + dashboard.constants.NAME}
                component={dashboard.component}
              />
              <Route
                path={"/" + devices.constants.NAME}
                component={devices.component}
              />
              <Route
                path={"/" + installer.constants.NAME}
                component={installer.component}
              />
              <Route
                path={"/" + packages.constants.NAME}
                component={packages.component}
              />
              <Route
                path={"/" + system.constants.NAME}
                component={system.component}
              />
              <Route path={"/nonadmin"} component={NonAdmin} />
            </ErrorBoundary>
          </div>
        </div>
        <ToastContainer />
        <status.component />
        <chains.component />
        <NonAdminRedirector />
      </div>
    );
  }
}
