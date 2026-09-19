import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.css';

const DefaultIcon = () => (
  <svg
    className={classNames('icon')}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

export const Card = ({
  icon = <DefaultIcon />,
  isHovered = false,
  title,
  children,
  className = '',
}) => {
  return (
    <div className={classNames('card', { 'is-hovered': isHovered }, className)}>
      {icon && <div className={classNames('icon-badge')}>{icon}</div>}
      <div className={classNames('content')}>
        {title && <h3 className={classNames('title')}>{title}</h3>}
        {children && <p className={classNames('description')}>{children}</p>}
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isHovered: PropTypes.bool,
};

