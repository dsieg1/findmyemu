import React, { Component } from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./App.css";

import DefaultLayout from "./Layouts/DefaultLayout";
import SecondaryLayout from "./Layouts/SecondaryLayout";
import Home from "./Pages/Home";
import SecondaryPage from "./Pages/Secondary";

// const App = () => (
//   <h1>Hello World!</h1>
// );

class App extends Component {
    render(){
        return (
            <Router>
                <div className="page-wrapper">
                    <DefaultLayout exact path={"/"} component={Home} />
                    <SecondaryLayout path={"/secondary"} component={SecondaryPage} />
                </div>
            </Router>
        );
    };
}

export default App;

