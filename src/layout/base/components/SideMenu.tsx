import React from 'react';
import { Menu } from 'antd';

import menu, { IMenu } from '../../../data/menu';
import { SelectParam } from 'antd/lib/menu';

const { SubMenu, Item } = Menu;
interface IProps {
	onClick: (value: IMenu) => void;
	selectedKey: [];
	setSelectKey: any;
	openKeys: [];
	setOpenKey: (value: string[]) => void;
}

const SideMenu = (props: IProps) => {
	const clickMenu = (item: IMenu) => {
		props.onClick && props.onClick(item);
	};
	//Render  Menu
	const createMenu = (data: IMenu[]) => {
		return data.map((item: IMenu) => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{createMenu(item.children)}
					</SubMenu>
				);
			} else {
				return (
					<Item onClick={() => clickMenu(item)} key={item.key}>
						{item.title}ß
					</Item>
				);
			}
		});
	};

	const selectMenu = (e: SelectParam) =>
		props.setSelectKey && props.setSelectKey(e.key);
	const openChange = (openKeys: string[]) =>
		props.setOpenKey && props.setOpenKey(openKeys);
	return (
		<Menu
			mode='inline'
			selectedKeys={props.selectedKey}
			onSelect={selectMenu}
			openKeys={props.openKeys}
			onOpenChange={openChange}
		>
			{createMenu(menu)}
		</Menu>
	);
};

export default SideMenu;
