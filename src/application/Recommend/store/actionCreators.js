// 放不同 action 的地方

import * as actionType from './constants';
import {
    getBannerRequest,
    getRecommendListRequest,
} from '../../../api/request';

export const changeBannerList = (data) => ({
    type: actionType.CHANGE_BANNER,
    data,
});

export const changeRecommendList = (data) => ({
    type: actionType.CHANGE_RECOMMEND_LIST,
    data,
});



// 类似于dva的effect,结束之后 -》 返回纯函数-》调用reducer 生成数据。
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then((data) => {
                dispatch(changeBannerList(data.banners));
            })
            .catch((err) => {
                console.log('轮播图数据传输错误', err);
            });
    };
};

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest()
            .then((data) => {
                dispatch(changeRecommendList(data.result));
            })
            .catch((err) => {
                console.log('推荐歌单数据传输错误', err);
            });
    };
};
