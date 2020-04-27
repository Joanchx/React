/**
 * @desc useReducer统一封装set方法
 */

import { useReducer, Reducer } from 'react';

type IAction = [string, any] | [string];

const _useReducer = <T = object>(
	reducer: (state: T, action: IAction) => T,
	initState: T
) => {
	const _reducer = (state: T, action: IAction) => {
		const [type, payload] = action;
		switch (type) {
			case 'set':
				return {
					...state,
					...payload,
				};
			default:
				return reducer(state, action);
		}
	};

	const [state, dispatch] = useReducer<Reducer<T, IAction>>(
		_reducer,
		initState
	);

	return [state, dispatch];
};

export default _useReducer;
