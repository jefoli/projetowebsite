import React from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  if (!isClosed) {
    return <Route {...rest} component={Component} />;
  }
}

MyRoute.DefaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func]).isRequired,
  isClosed: propTypes.bool,
};
