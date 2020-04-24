import React, { Suspense } from 'react';
import { Router } from 'dva/router';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';
import routers from './config/routers';
import { RouterProps } from "react-router";

const App: React.FC<RouterProps> = ({ history }) => (
    <Router history={history}>
        <Suspense fallback={<div>loading...</div>}>
            <AuthorizedRoute routers={routers}/>
        </Suspense>
    </Router>
)

export default App;
