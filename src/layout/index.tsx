import React from 'react';
import { Layout } from 'antd';

import { Routes } from '../lib/routes';
import { SideMenu, HeadPortrait } from './components';
import IProps from './interface';
import { SideContent, LayoutContent } from './styled';

const { Header, Content, Footer } = Layout;

const BaseLayout = (props: IProps) => {
	return (
		<LayoutContent style={{ height: '100%' }}>
			<Header>
				<HeadPortrait />
			</Header>
			<Layout>
				<SideContent>
					<SideMenu />
				</SideContent>
				<Layout>
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
