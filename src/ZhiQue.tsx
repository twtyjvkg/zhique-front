import React, {Suspense} from 'react';
import {Router} from 'dva/router';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';
import {RouterProps} from 'react-router';
import {DvaInstance} from 'dva';
import routers from './routers';

interface ZhiQueProps extends RouterProps {
    app: DvaInstance
}

const ZhiQue: React.FC<ZhiQueProps> = ({ history, app }) => (
    <Router history={history}>
        <Suspense fallback={<div>loading...</div>}>
            <AuthorizedRoute routers={routers} app={app}/>
        </Suspense>
    </Router>
)

export default ZhiQue;
