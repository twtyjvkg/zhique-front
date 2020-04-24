import React from 'react';
import { Redirect, Route, Switch } from 'dva/router';
import { RoutersConfig } from '../../typings/IRouterConfig';

interface AuthorizedRouteProps {
    routers: RoutersConfig;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({ routers }) => (
    <Switch>
        { routers.map(({ path, redirect, component, children }, index) => (
            redirect ? <Redirect key={index} to={redirect} from={path} /> :
                <Route key={index} path={path} render={props => {
                    const Component = component;
                    // @ts-ignore
                    return <Component children={children} {...props} />
                }} />
        )) }
    </Switch>
)

export default AuthorizedRoute;
