import React from 'react';
import { routerRedux, Switch, Route } from 'dva/router';
import { History } from "history";

const { ConnectedRouter } = routerRedux;

interface RouterConfigProps {
    history: History;
}

const RouterConfig: React.FC<RouterConfigProps> = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route />
            </Switch>
        </ConnectedRouter>
    )
}
