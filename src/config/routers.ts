import { RoutersConfig } from '../typings/IRouterConfig';

const routers: RoutersConfig = [
    {
        path: '/123',
        component: () => import('../layouts/Test'),
    }
];

export default routers;
