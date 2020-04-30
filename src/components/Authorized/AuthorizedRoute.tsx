import React, { Component } from 'react';
import { RouteProps } from 'dva/router';
import { connect } from 'dva';
import * as H from 'history';

interface AuthorizedRouteProps extends RouteProps {
    history: H.History;
}

@connect()
export default class AuthorizedRoute extends Component<AuthorizedRouteProps> {

    componentDidMount(): void {
        const { history } = this.props;
        history.push('/123');
    }

    render(): React.ReactNode {
        return this.props.children;
    }
}
