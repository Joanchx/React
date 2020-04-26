import { lazy } from 'react';

import config from '../../config';

const prefix = config.prefix;

const routeConfig = [
	{
		tag: 'Redirect',
		from: '/',
		to: `/login`,
		exact: true,
	},
	{
		tag: 'Route',
		path: `/login`,
		component: lazy(() => import('../../pages/login')),
		exact: true,
	},
	{
		tag: 'Route',
		path: `${prefix}`,
		component: lazy(() => import('../../layout')),
		routes: [
			{
				name: '首页',
				tag: 'Route',
				path: `${prefix}/home`,
				component: lazy(() => import('../../pages/home')),
			},
		],
	},
];

export default routeConfig;
