//menu
export interface IMenu {
	key: string;
	url: string;
	title: string;
	children?: IMenu[];
}

//menu
const menu: IMenu[] = [
	{
		key: '1',
		url: '/home',
		title: '首页',
	},
	{
		key: '2',
		url: '/home',
		title: '系统管理',
		children: [
			{
				key: '2-1',
				url: '/home',
				title: '用户管理',
			},
			{
				key: '2-2',
				url: '/home',
				title: '角色管理',
			},
		],
	},
];

export default menu;
