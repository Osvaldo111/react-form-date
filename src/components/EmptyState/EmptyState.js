import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function EmptyState(props) {
  const { action, className, icon, title, description, onClick, buttonText } = props;
  return (
    <section styleName="empty-state" className={className}>
      <div styleName="content">
        {icon}
        <h1>{title}</h1>
        {description && <span styleName="description">{description}</span>}
      </div>
    </section>
  );
}

EmptyState.propTypes = {
  action: PropTypes.bool,
  buttonText: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.node,
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

EmptyState.defaultProps = {
  action: false,
  buttonText: (
    <span>
      <i className="icon-add" /> Add
    </span>
  ),
  className: '',
};

export default EmptyState;
