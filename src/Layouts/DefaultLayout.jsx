// React, react router, redux imports
import React from "react";
import { Route } from "react-router";

// component imports
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const DefaultLayout = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={matchProps => (
            <div className={"app-fill-viewport default-layout"}>
                <Header/>
                <div id="content-wrapper">
                    <Component className={rest.className} {...matchProps} />
                </div>
                <Footer/>
            </div>
        )} />
    );
};
export default DefaultLayout;
