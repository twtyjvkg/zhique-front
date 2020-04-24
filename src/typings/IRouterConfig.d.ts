import * as React from "react";
import {RouterComponentProps} from "react-Routerr";

export interface RouterConfig {
    path: string;
    component?: React.ComponentType<RouterComponentProps<any>> | React.ComponentType<any>;
    redirect?: string;
    children?: RouterConfig[];
}

export declare type RoutersConfig = RouterConfig[];
