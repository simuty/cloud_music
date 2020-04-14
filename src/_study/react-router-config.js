// !-----react-router-config 补充
// https://segmentfault.com/a/1190000020084779
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter, Redirect } from 'react-router-dom';


// !源码
import React from "react";
import { Switch, Route } from "react-router";

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            )
          }
        />
      ))}
    </Switch>
  ) : null;
}

export default renderRoutes;


// 实例
// renderRoutes 这个方法只渲染一层路由, 
const routes = [
    { path: '/', exact: true, render: () => <Redirect to={'/page1'} /> },
    { path: '/page1', component: Page1 },
    {
        path: '/page2',
        component: Page2,
        routes: [
            {
                path: '/page2/child',
                component: Child,
            },
        ],
    },
];

function App() {
    return (
        <HashRouter>
            <div className="App">
                <h1>Hello</h1>
                {renderRoutes(routes)}
            </div>
        </HashRouter>
    );
}


