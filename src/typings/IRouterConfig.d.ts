import * as React from "react";
import {RouterComponentProps} from "react-Routerr";

export interface RouterConfig {
    path: string;
    component?: Promise;
    models?: Promise[];
    redirect?: string;
    children?: RouterConfig[];
}

export declare type RoutersConfig = RouterConfig[];
