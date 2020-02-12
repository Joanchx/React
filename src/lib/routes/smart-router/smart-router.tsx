import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import IRouteConfig from '../interface';



const SmartRouter = (route: IRouteConfig) => {
    return route.tag === 'Redirect' ? (
        <Redirect from={route.from} to={route.to} exact={route.exact} />
    ) : (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props: any) => <route.component {...props} routes={route.routes} />}
        />
    );
};

const Routes = (props: any) => {
    console.log('props',props)
    return (
        <Switch>
            {props.routes.map((route: IRouteConfig, i: number) => (
                <SmartRouter key={i} {...route} />
            ))}
        </Switch>
    );
};

export { Routes };
