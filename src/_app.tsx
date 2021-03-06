import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Flex, Logo } from "vcc-ui";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <Flex extend={{ padding: 16 }}>
          <Logo type="spreadmark" alt="Volvo Cars" />
        </Flex>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learn:id" component={Learn} />
        <Route path="/shop:id" component={Shop} />
      </Switch>
    </div>
    
  );
}

export default App;
