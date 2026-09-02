import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { options } from './constants';
import './Tooltip.css';

export const Tooltip = ({
  title,
  children,
  theme = 'dark',
  icon,
  onClose,
  className = '',
}) => {

  return (
    <div className={classNames('tooltip', theme, className)} role="tooltip">
      {icon && <div className={classNames('iconWrapper')}>{icon}</div>}
      
      <div className={classNames('content')}>
        {title && <p className={classNames('title', theme)}>{title}</p>}
        {children && <p className={classNames('description', theme)}>{children}</p>}
      </div>

      {onClose && (
        <button
          type="button"
          className={classNames('closeButton')}
          onClick={onClose}
          aria-label="Close tooltip"
        >
          <svg className={classNames('icon')} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(options.theme),
  icon: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string,
};