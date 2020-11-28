import React from 'react';
import { EmptyState } from '../../components';

function NotFound() {
  return (<EmptyState title="Oops! Error 404" description="Page not found" />);
}

NotFound.propTypes = {
};

NotFound.defaultProps = {
  active: false,
};

export default NotFound;
