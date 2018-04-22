import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const routes = {
    "/": "Home",
    "/secondary" : "Secondary"
};

const findRouteName = url => routes[url];
const getPaths = (pathname) => {
    const paths = ['/'];

    if (pathname === '/') return paths;

    pathname.split('/').reduce((prev, curr, index) => {
        const currPath = `${prev}/${curr}`;
        paths.push(currPath);
        return currPath;
    });

    return paths;
};

const BreadcrumbsItem = ({ ...rest, match }) => {
    const routeName = findRouteName(match.url);
    if (routeName) {
        return (
            match.isExact ?
                (
                    <BreadcrumbItem active>{routeName}</BreadcrumbItem>
                ) :
                (
                    <BreadcrumbItem>
                        <Link to={match.url || ''}>
                            {routeName}
                        </Link>
                    </BreadcrumbItem>
                )
        );
    }
    return null;
};

const Breadcrumbs = ({props, ...rest, location : { pathname }, match }) => {
    const paths = getPaths(pathname);
    return (
        <Breadcrumb>
            {paths.map(p => <Route path={p} component={BreadcrumbsItem} />)}
        </Breadcrumb>
    );
};

export default props => ( <Route path="/:path" component={Breadcrumbs} {...props} /> );

// another example that might be worth looking into that does a slightly better job of this is here:
// https://github.com/icd2k3/react-router-breadcrumbs-hoc/tree/master/src
// I didn't include this for now just to keep dependencies down and the prototype environment
// doesn't have any dynamic routes, so, no real need in our case, could be good for prod builds, however
// yet further info can be found here: https://github.com/ReactTraining/react-router/issues/4556
