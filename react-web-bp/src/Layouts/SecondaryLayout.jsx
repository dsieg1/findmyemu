// React, react router, redux imports
import React from "react";

// component imports
import DefaultLayout from "./DefaultLayout";
import Breadcrumbs from "../Components/Breadcrumbs";

const SecondaryLayout = ({component: Component, ...rest}) => {
    return(
        <DefaultLayout {...rest} component={matchProps => (
            <div id={rest.id}>
                <Breadcrumbs />
                <Component {...matchProps} />
            </div>
        )} />
    );
};
export default SecondaryLayout;
