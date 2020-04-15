import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// https://blog.csdn.net/achenyuan/article/details/80884895
// 调试工具
// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__),
// );

let store =
    process.env.NODE_ENV === 'production'
        ? createStore(rootReducer, applyMiddleware(thunk))
        : window.__REDUX_DEVTOOLS_EXTENSION__
        ? createStore(
              rootReducer,
              compose(
                  applyMiddleware(thunk),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              ),
          )
        : createStore(rootReducer, applyMiddleware(thunk));

// const store =
//     process.env.NODE_ENV === 'production'
//         ? createStore(rootReducer, applyMiddleware(thunk))
//         : window.__REDUX_DEVTOOLS_EXTENSION__
//         ? existTool
//         : createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// const store = createStore(
//     reducer /* preloadedState, */,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
