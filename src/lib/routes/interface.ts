import { RouteComponentProps } from 'react-router';

interface IRouteConfig {
	tag: 'Redirect' | 'Route';
	from?: string;
	to?: any;
	exact?: boolean;
	routes?: IRouteConfig[];
	component:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>;
	path?: string;
	name?: string;
}

export default IRouteConfig;
