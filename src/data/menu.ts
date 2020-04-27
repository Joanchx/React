//interface Menu
export interface IMenu {
	key: string;
	url?: string;
	title: string;
	children?: IMenu[];
}

//Menu
const menu: IMenu[] = [
	{
		key: 'home',
		url: 'home',
		title: '首页',
	},
	{
		key: 'system',
		title: '系统管理',
		children: [
			{
				key: 'system-userManage',
				url: 'userManage',
				title: '用户管理',
			},
		],
	},
];

export default menu;
