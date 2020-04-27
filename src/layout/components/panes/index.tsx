import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import tabs from '../../../data/tabs';

const { TabPane } = Tabs;

const TabsContent = styled(Tabs)`
	.ant-tabs-bar {
		margin: 6px 0 0 0;
	}
`;

const TabPaneContent = styled(TabPane)`
	// .ant-layout-content {
	// 	background: #fff;
	// }
`;

export interface IPane {
	title: string;
	url: string;
	key: string;
}

interface IProps {
	panes: IPane[];
	activePaneKey: string;
	changePane: any;
	remove: any;
}

const Panes = (props: IProps) => {
	const onEdit = (targetKey: string | React.MouseEvent<HTMLElement>) => {
		//仅存在remove
		props.remove && props.remove(targetKey);
	};

	return (
		<TabsContent
			type='editable-card'
			activeKey={props.activePaneKey}
			hideAdd={true}
			onChange={props.changePane}
			onEdit={onEdit}
		>
			{props.panes.map(item => {
				const C = tabs[item.url];
				return (
					<TabPaneContent
						tab={item.title}
						key={item.key}
						closable={true}
					>
						<Suspense fallback={<div>loading...</div>}>
							<C />
						</Suspense>
					</TabPaneContent>
				);
			})}
		</TabsContent>
	);
};

export default Panes;
