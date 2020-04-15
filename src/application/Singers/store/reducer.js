import produce from 'immer';
import * as actionTypes from './constants';

const defaultState = {
    singerList: [],
    enterLoading: true, //控制进场Loading
    pullUpLoading: false, //控制上拉加载动画
    pullDownLoading: false, //控制下拉加载动画
    pageCount: 0, //这里是当前页数，我们即将实现分页功能
};

const singerReducer = produce((draft = defaultState, action) => {
    // console.log("action", action)
    switch (action.type) {
        case actionTypes.CHANGE_SINGER_LIST:
            draft.singerList = action.data;
            return draft;
        case actionTypes.CHANGE_PAGE_COUNT:
            draft.pageCount = action.data;
            return draft;
        case actionTypes.CHANGE_ENTER_LOADING:
            draft.enterLoading = action.data;
            return draft;
        case actionTypes.CHANGE_PULLUP_LOADING:
            draft.pullUpLoading = action.data;
            return draft;
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            draft.pullDownLoading = action.data;
            return draft;
        default:
            return draft;
    }
});
export default singerReducer;
