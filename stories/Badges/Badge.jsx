import PropTypes from 'prop-types'
import classNames from "classnames";
import { options } from "./constants";

import "./Badge.css";

export const Badge = ({
    children,
     variant = 'square',
     color = 'gray',
    }) => {

    return (
        <span className={classNames('badge', {
            [`color-${color}`]: color,
            [`variant-${variant}`]: variant,
        })}>
            {children}
        </span>
    )
};

Badge.prototype = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(options.variant),
    color: PropTypes.oneOf(options.colors)
}

export default Badge