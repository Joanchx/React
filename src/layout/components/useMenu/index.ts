/**
 * 菜单
 */
import { useReducer } from '../../../lib/utils';
import reducer from './reducer';

const useMenu = () => {
	const init = {
		selectedKey: [],
		openKeys: [],
		collapsed: false,
		panes: [],
		activePaneKey: '',
	};

	//TODO:类型
	const [state, dispatch] = useReducer<any>(reducer, init);

	return [state, dispatch];
};

export default useMenu;
