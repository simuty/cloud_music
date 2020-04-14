// 存放 initialState 和 reducer 函数
import produce from 'immer';

const reducer = (cases = {}, defaultState = {}) => (
    state = defaultState,
    action,
) =>
    produce(state, (draft) => {
        if (action && action.type && cases[action.type] instanceof Function) {
            cases[action.type](draft, action.payload);
        }
    });

export default reducer;
