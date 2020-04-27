import { IPane } from '../panes';

type IAction = [string, any] | [string];

//TODO:类型
const reducer = (state: any, action: IAction) => {
	const [type, payload] = action;

	//是否存在标签中
	const isExit = (pane: IPane) =>
		state.panes.some((item: IPane) => item.title === pane.title);

	switch (type) {
		//选中的值
		case 'setSelectKey':
			return {
				...state,
				selectedKey: payload,
			};
		//展开的值
		case 'setOpenKey':
			return {
				...state,
				openKeys: payload,
			};
		//菜单伸缩
		case 'collapsedToggle':
			return {
				...state,
				collapsed: payload,
			};
		//增加标签
		case 'addPane':
			if (isExit(payload)) {
				return {
					...state,
					activePaneKey: payload.key,
				};
			} else {
				return {
					...state,
					panes: [...state.panes, payload],
					activePaneKey: payload.key,
				};
			}
		//设置pane选中
		case 'setActivePaneKey':
			return {
				...state,
				activePaneKey: payload,
				selectedKey: payload,
			};

		default:
			throw new Error();
	}
};

export default reducer;
