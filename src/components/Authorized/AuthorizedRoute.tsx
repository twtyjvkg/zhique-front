import React from 'react';
import { Redirect, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import { RoutersConfig } from '../../typings/IRouterConfig';

interface AuthorizedRouteProps {
    routers: RoutersConfig;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({ routers }) => (
    <Switch>
        { routers.map(({ path, redirect, ...dynamics }, index) => (
            redirect ? <Redirect key={index} to={redirect} from={path} /> :
                <Route key={index} path={path} component={dynamic({
                    // @ts-ignore
                    app: window.dvaApp,
                    ...dynamics
                })}/>
        )) }
    </Switch>
);

export default AuthorizedRoute;
