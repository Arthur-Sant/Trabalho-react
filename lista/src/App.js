import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Activity1 from "./pages/Activity1/Activity1";
import Activity2 from "./pages/Activity2/Activity2";
import Activity3 from "./pages/Activity3/Activity3";
import Activity4 from "./pages/Activity4/Activity4";
import Activity5 from "./pages/Activity5/Activity5";

const App = () => {
  return (
    <Routes>
      <div className="container">
        <Sidebar/>
        <div className="routes">  
          <Route component={Activity1} path="/" exact/>
          <Route component={Activity2} path="/activity2" exact/>
          <Route component={Activity3} path="/activity3" exact/>
          <Route component={Activity4} path="/activity4" exact/>
          <Route component={Activity5} path="/activity5" exact/>
        </div>
      </div>
    </Routes>
  )
};

export default App;
