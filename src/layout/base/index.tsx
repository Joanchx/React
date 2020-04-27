import React from 'react';
import { Layout } from 'antd';

import { Routes } from '../../lib/routes';
import { SideMenu } from './components';
import IProps from './interface';
import { SideContent, LayoutContent } from './styled';
import { useMenu, Panes, HeadPortrait } from '../components';
import { IPane } from '../components/panes';
import { IMenu } from '../../data/menu';

const { Header, Content, Footer } = Layout;

const BaseLayout = (props: IProps) => {
	const [state, dispatch] = useMenu();

	//点击菜单
	const clickMenu = (item: IMenu) => {
		const { title, url, key } = item;
		const pane = {
			title,
			url,
			key,
		};
		dispatch(['addPane', pane]);
	};

	//点击panes
	const changePane = (key: string) => {
		dispatch(['setActivePaneKey', key]);
	};

	//关闭pane
	const remove = (target: string) => {
		let activePaneKey = state.activePaneKey;
		const panes = state.panes.filter((pane: IPane, index: number) => {
			if (pane.key === target && activePaneKey === pane.key) {
				const i = index > 0 ? index - 1 : index + 1;
				activePaneKey = state.panes[i] ? state.panes[i].key : '';
			}
			return pane.key !== target;
		});
		dispatch([
			'set',
			{
				panes: panes,
				activePaneKey,
			},
		]);
	};

	return (
		<LayoutContent style={{ height: '100%' }}>
			<Header>
				<HeadPortrait />
			</Header>
			<Layout>
				<SideContent>
					<SideMenu
						onClick={clickMenu}
						selectedKey={state.selectedKey}
						setSelectKey={(key: string) =>
							dispatch(['setSelectKey', key])
						}
						openKeys={state.openKeys}
						setOpenKey={(key: string[]) =>
							dispatch(['setOpenKey', key])
						}
					/>
				</SideContent>
				<Layout>
					<Panes
						panes={state.panes}
						activePaneKey={state.activePaneKey}
						changePane={changePane}
						remove={remove}
					/>
					<Content style={{ margin: '0 16px' }}>
						<Routes routes={props.routes} />
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Demo ©2020 Created by Joan
					</Footer>
				</Layout>
			</Layout>
		</LayoutContent>
	);
};

export default BaseLayout;
