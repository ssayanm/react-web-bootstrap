import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <React.Fragment>
        {" "}
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>{" "}
          </Layout>{" "}
        </Router>
      </React.Fragment>
    </MovieProvider>
  );
}

export default App;
