export interface RouterConfig {
    path: string;
    component?: Promise;
    models?: Promise[];
    redirect?: string;
    children?: RouterConfig[];
}

export declare type RoutersConfig = RouterConfig[];
