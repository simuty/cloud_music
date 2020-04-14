import React from 'react';
//renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import { GlobalStyle } from './style';
import routes from './routes';
import { IconStyle } from './assets/iconfont/iconfont';


function App() {
    return (
        <HashRouter>
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
            {renderRoutes(routes)}
        </HashRouter>
    );
}

export default App;
