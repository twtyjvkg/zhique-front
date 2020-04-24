import React from 'react';
import { Redirect, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import { RoutersConfig } from '../../typings/IRouterConfig';
import { DvaInstance } from 'dva';

interface AuthorizedRouteProps {
    routers: RoutersConfig;
    app: DvaInstance;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({ routers, app }) => (
    <Switch>
        { routers.map(({ path, redirect, ...dynamics }, index) => (
            redirect ? <Redirect key={index} to={redirect} from={path} /> :
                <Route key={index} path={path} component={dynamic({
                    // @ts-ignore
                    app,
                    ...dynamics
                })}/>
        )) }
    </Switch>
)

export default AuthorizedRoute;
