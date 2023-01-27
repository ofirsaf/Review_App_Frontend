import React from "react";
import { Route } from "react-router-dom";

import { Switch } from "react-router-dom";
import Actors from "../components/admin/Actors";
import Dashboard from "../components/admin/Dashboard";
import Header from "../components/admin/Header";
import Movies from "../components/admin/Movies";
import Navbar from "../components/admin/Navbar";
import Notfound from "../components/Notfound";

export default function AdminNavigator() {
  return (
    <div className="flex dark:bg-primary bg-white">
      <Navbar />
      <div className="flex-1 p-2 max-w-screen-xl">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/actors">
            <Actors />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
