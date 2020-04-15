import React, { useState } from 'react';
import { connect } from 'react-redux';

import Horizen from '../../baseUI/horizen-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import { NavContainer, ListContainer, List, ListItem } from './style';
import Scroll from './../../baseUI/scroll/index';
import {
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    changePageCount,
    refreshMoreSingerList,
    changePullUpLoading,
    changePullDownLoading,
    refreshMoreHotSingerList,
} from './store/actionCreators';

// const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
//     return {
//         picUrl:
//             'https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg',
//         name: '隔壁老樊',
//         accountId: 277313426,
//     };
// });

// 渲染函数，返回歌手列表
const renderSingerList = (singerList) => {
    return (
        <List>
            {singerList.map((item, index) => {
                return (
                    <ListItem key={item.accountId + '' + index}>
                        <div className="img_wrapper">
                            <img
                                src={`${item.picUrl}?param=300x300`}
                                width="100%"
                                height="100%"
                                alt="music"
                            />
                        </div>
                        <span className="name">{item.name}</span>
                    </ListItem>
                );
            })}
        </List>
    );
};

function Singers(props) {
    // 函数组件，引用dispatch需要引入对应的Dispatch否则报错找不到
    const { updateDispatch } = props;
    const { singerList } = props;
    // singerList: [],
    // enterLoading: true, //控制进场Loading
    // pullUpLoading: false, //控制上拉加载动画
    // pullDownLoading: false, //控制下拉加载动画
    // pageCount: 0, //这里是当前页数，我们即将实现分页功能

    let [category, setCategory] = useState('');
    let [alpha, setAlpha] = useState('');

    const handleUpdateAlpha = (val) => {
        console.log('点击:首字母', val);
        setAlpha(val);
        updateDispatch(category, val);
    };

    const handleUpdateCatetory = (val) => {
        console.log('点击:首字母', val);
        setCategory(val);
        updateDispatch(val, alpha);
    };

    return (
        <div>
            <NavContainer>
                <Horizen
                    list={categoryTypes}
                    title={'分类 (默认热门):'}
                    handleClick={(val) => handleUpdateCatetory(val)}
                    oldVal={category}
                ></Horizen>
                <Horizen
                    list={alphaTypes}
                    title={'首字母:'}
                    handleClick={(val) => handleUpdateAlpha(val)}
                    oldVal={alpha}
                ></Horizen>
            </NavContainer>
            <ListContainer>
                <Scroll>{renderSingerList(singerList)}</Scroll>
            </ListContainer>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSingerDispatch() {
            dispatch(getHotSingerList());
        },
        updateDispatch(category, alpha) {
            console.log('dispatch-------', category, alpha);
            dispatch(changePageCount(0)); //由于改变了分类，所以pageCount清零
            dispatch(changeEnterLoading(true)); //loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
            dispatch(getSingerList(category, alpha));
        },
        // 滑到最底部刷新部分的处理
        pullUpRefreshDispatch(category, alpha, hot, count) {
            dispatch(changePullUpLoading(true));
            dispatch(changePageCount(count + 1));
            if (hot) {
                dispatch(refreshMoreHotSingerList());
            } else {
                dispatch(refreshMoreSingerList(category, alpha));
            }
        },
        //顶部下拉刷新
        pullDownRefreshDispatch(category, alpha) {
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0)); //属于重新获取数据
            if (category === '' && alpha === '') {
                dispatch(getHotSingerList());
            } else {
                dispatch(getSingerList(category, alpha));
            }
        },
    };
};

// !函数组件获取的是 全部的 state
const mapStateToProps = (state) => {
    const {
        singerList = [],
        enterLoading,
        pullUpLoading,
        pullDownLoading,
        pageCount,
    } = state.singers;
    return {
        singerList,
        enterLoading,
        pullUpLoading,
        pullDownLoading,
        pageCount,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Singers);
