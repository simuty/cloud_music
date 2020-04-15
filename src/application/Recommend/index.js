import React, { memo } from 'react';
import { connect } from 'react-redux';
import Slider from '../../components/slider';
// import List from '../../components/list';
import RecommendList from '../../components/list/';
import * as actionTypes from './store/actionCreators';
import Scroll from './../../baseUI/scroll/index';

// 懒加载
import { forceCheck } from 'react-lazyload';

const mapStateToProps = ({ recommend }) => ({
    bannerList: recommend.bannerList,
    recommendList: recommend.recommendList,
});
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        },
    };
};

// 生成组件
class Recommend extends React.PureComponent {
    componentDidMount() {
        const { bannerList, recommendList } = this.props;
        // 1. 自动调用
        if (!bannerList.size) {
            this.props.getBannerDataDispatch();
        }
        if (!recommendList.size) {
            console.log("------")
            this.props.getRecommendListDataDispatch();
        }
    }

    render() {
        // 2. 获取数据
        const { bannerList, recommendList } = this.props;
        return (
            <div>
                <Slider bannerList={bannerList}></Slider>
                <RecommendList recommendList={recommendList}></RecommendList>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
