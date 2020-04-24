import { RoutersConfig } from "./typings/IRouterConfig";

const routers: RoutersConfig = [
    {
        path: '/',
        component: () => import('./layouts/TestLayout')
    }
];

export default routers;
