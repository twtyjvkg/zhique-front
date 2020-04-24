import React, { Suspense } from 'react';
import { DvaInstance } from 'dva';
import { Router } from 'dva/router';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';
import routers from './config/routers';
import { RouterProps } from "react-router";

interface AppProps extends RouterProps {
    app: DvaInstance
}

const App: React.FC<AppProps> = ({ history, app }) => (
    <Router history={history}>
        <Suspense fallback={<div>loading...</div>}>
            <AuthorizedRoute routers={routers} app={app}/>
        </Suspense>
    </Router>
)

export default App;
