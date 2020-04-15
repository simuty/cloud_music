import { combineReducers } from 'redux';

import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from '../application/Singers/store/index';

export default combineReducers({
    // !这个名字recommend 即是 mapStateToProps中的参数
    recommend: recommendReducer,
    singers: singersReducer,
});
