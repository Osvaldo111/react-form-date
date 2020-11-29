import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const { src, type, ...others } = props;
  return <img src={src} alt={type} {...others} />;
}

Icon.defaultProps = {
  width: 22,
  height: 22,
};

export default Icon;
