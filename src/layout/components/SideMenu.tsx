import React from 'react';
import { Menu } from 'antd';

import menu, { IMenu } from '../../data/menu';

const { SubMenu, Item } = Menu;

const SideMenu = () => {
	//Render  Menu
	const createMenu = (data: IMenu[]) => {
		return data.map((item: IMenu) => {
			if (item.children) {
				return (
					<SubMenu title={item.title}>
						{createMenu(item.children)}
					</SubMenu>
				);
			} else {
				return <Item>{item.title}</Item>;
			}
		});
	};

	return <Menu mode='inline'>{createMenu(menu)}</Menu>;
};

export default SideMenu;
