import React, { Component } from 'react';
import { Route, RouteProps } from 'dva/router';

export default class AuthorizedRoute extends Component<RouteProps> {

    render(): React.ReactNode {
        return <Route {...this.props} />;
    }
}
