//routes/index.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

// react-router-config 使用说明见application
export default [
    {
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to={'/recommend'} />,
            },
            {
                path: '/recommend',
                component: Recommend,
            },
            {
                path: '/singers',
                component: Singers,
            },
            {
                path: '/rank',
                component: Rank,
            },
        ],
    },
];
