import Auth from "./Auth";
import Mood from "./Mood";
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import React from "react";

const App = () =>{
  return(
    <>
    <Switch>
      <Route path="/" exact>

        <Auth/>
      </Route>
      <Route path="/mood">
        <Mood/>
      </Route>
      </Switch>
      </>
  )
}

export default App;