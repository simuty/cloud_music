import React, { memo } from 'react';
// 用于渲染二级路由
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { Top, Tab, TabItem } from './style';

function Home(props) {
    const { route, history } = props;
    const gotoOther = () => {
        history.push('/rank', {});
    };

    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>

            <Tab>
                <NavLink to="/recommend" activeClassName="selected">
                    <TabItem>
                        <span>推荐</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem>
                        <span>歌手</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected">
                    <TabItem>
                        <span>排行榜</span>
                    </TabItem>
                </NavLink>
            </Tab>

            {renderRoutes(route.routes)}
        </div>
    );
}
// React.memo() 参考学习资源 /src/_study  memo.js
export default memo(Home);
