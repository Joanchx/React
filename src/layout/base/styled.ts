import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;
//layout
export const LayoutContent = styled(Layout)`
	.ant-layout-header {
		padding: 0 20px;
	}
`;

//side
export const SideContent = styled(Sider)`
	.ant-menu {
		height: 100%;
	}
`;
