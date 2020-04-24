import React from "react";
import { RoutersConfig } from "../typings/IRouterConfig";

const routers: RoutersConfig = [
    {
        path: '/',
        component: React.lazy(() => import('../layouts/TestLayout'))
    }
];

export default routers;
