import React, { Suspense } from 'react';
import { RouterProps } from 'react-router';
import { Router } from 'dva/router';
import routers from './config/routers';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';

const ZhiQue: React.FC<RouterProps> = ({ history }) => (
    <Router history={history}>
        <Suspense fallback={<div>loading...</div>}>
            <AuthorizedRoute routers={routers}/>
        </Suspense>
    </Router>
)

export default ZhiQue;
