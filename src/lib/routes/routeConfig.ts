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
		component: lazy(() => import('../../layout/base')),
		exact: true,
		routes: [],
	},
];

export default routeConfig;
