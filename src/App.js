import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "./App.css";
import AddStation from "./components/AddStation";
import Stations from "./components/StationsList";
import StationProfile from "./components/StationProfile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <div className="content">
          <SideBar />
          <Switch>
            <Route exact path="/" component={AddStation} />
            <Route path="/stations" component={Stations} />
            <Route path="/station-profile" component={StationProfile} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
