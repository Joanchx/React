/**
 * @desc 标签
 */
import { lazy } from 'react';

interface ITab {
	[propName: string]: React.ComponentType<any>;
}

const tabs: ITab = {
	home: lazy(() => import('../pages/home')),
	userManage: lazy(() => import('../pages/userManage')),
};

export default tabs;
