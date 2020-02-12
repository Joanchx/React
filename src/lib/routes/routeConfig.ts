import config from '../../config';

import Layout from '../../layout';
import Home from '../../pages/home';

const prefix = config.prefix;

const routeConfig = [
    {
        tag: 'Redirect',
        from: '/',
        to: `${prefix}`,
        exact: true
    },
    {
        tag: 'Route',
        path: `${prefix}`,
        component: Layout,
        routes: [
            {
                name: '首页',
                tag: 'Route',
                path: `${prefix}/home`,
                component: Home
            }
        ]
    }
];

export default routeConfig;
