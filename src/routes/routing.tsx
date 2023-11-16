import React from 'react';

import { Routes as Router, Route } from 'react-router-dom';

import { config, RouteNodeType } from './config';

const createRoutesFromConfig = (routes: any[]) => {
  return routes.map((route) => {
    if (route.children && route.type === RouteNodeType.LAYOUT) {
      const elementWithNestedRoutes = (
        <Route key={route.id} element={route.element}>
          {createRoutesFromConfig(route.children)}
        </Route>
      );
      return elementWithNestedRoutes;
    }
    return <Route key={route.id} path={route.path} element={route.element} />;
  });
};

const NotFoundPage = () => <></>;

export const Routing = () => {
  return (
    <Router>
      {createRoutesFromConfig(config)}
      <Route path="*" element={<NotFoundPage />} />
    </Router>
  );
};
