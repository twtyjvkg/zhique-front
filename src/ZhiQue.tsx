import React, { Suspense } from 'react';
import { DvaInstance } from 'dva';
import { Redirect, Route, Router, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import { RouterProps } from 'react-router';

import routers from './config/routers';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';

interface ZhiQueProps extends RouterProps {
    app: DvaInstance
}

const ZhiQue: React.FC<ZhiQueProps> = ({ history, app }) => (
    <Router history={history}>
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <AuthorizedRoute path="/">
                    { routers.map(({ path, redirect, ...dynamics }, index) => (
                        redirect ? <Redirect key={index} to={redirect} from={path} /> :
                            <Route key={index} path={path} component={dynamic({
                                // @ts-ignore
                                app,
                                ...dynamics
                            })}/>
                    )) }
                </AuthorizedRoute>
            </Switch>
        </Suspense>
    </Router>
);

export default ZhiQue;
