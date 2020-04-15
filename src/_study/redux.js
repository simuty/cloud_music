
/*

[redux](https://redux.js.org/introduction/getting-started)

Redux is a predictable state container for JavaScript apps.
It helps you write applications that behave consistently, run in different environments (client, server, and native),
     and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
You can use Redux together with React, or with any other view library. 
    It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.


[react-redux](https://redux.js.org/introduction/getting-started)
Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.
If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.
React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two libraries.
To understand why you should use React Redux, it may help to understand what a "UI binding library" does.


[redux-thunk](https://github.com/reduxjs/redux-thunk)
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.
Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

学习 https://zhuanlan.zhihu.com/p/85403048


https://simuty.com/2020/04/10React%E7%B3%BB%E5%88%97-Redux/



第一部分 引入redux分以下几步骤

1. 参考 https://simuty.com/2020/04/10React%E7%B3%BB%E5%88%97-Redux/

2. 调试工具

3. 注意事项

// !craate store 的参数，各个reducer，这个别名，就是之后在component中使用的名称! 
export default combineReducers({
    // !这个名字recommend 即是 mapStateToProps中的参数
    recommend: recommendReducer,
});

// !recommend 对照reducers中的别名
const mapStateToProps = ({ recommend }) => ({
    bannerList: recommend.bannerList,
    recommendList: recommend.recommendList,
});


第二部分 immer 与调试技巧

redux-devtools-extension

https://blog.csdn.net/achenyuan/article/details/80884895


immer 注意事项

1. 
const recommendReducer = produce((draft = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            draft.bannerList = action.data;
            // !返回数据方式
            return draft;
        case actionTypes.CHANGE_RECOMMEND_LIST:
            draft.recommendList = action.data;
            return draft;
        default: {
            return draft;
        }
    }
});


第三部分 recommend 模块采用 class 方式


在此默认调用函数

componentDidMount() {
        // 1. 自动调用
        this.props.getBannerDataDispatch();
        this.props.getRecommendListDataDispatch();
    }




*/


