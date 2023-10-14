import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { config } from './config';

export const Routing = () => {
  return (
    <Router>
      {config.map((route) => {
        return (<Route
          key={route.id}
          path={route.path}
          element={route.element}
        >
          {route.children && route.children.map((childRoute) => (
            <Route
              key={childRoute.id}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}

        </Route>)})
        }
    </Router>
  );
};
