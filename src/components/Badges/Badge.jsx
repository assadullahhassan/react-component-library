import PropTypes from 'prop-types'
import styles from './Badge.module.css'

export const Badge = ({
    children,
     variant = 'square',
     color = 'gray',
     className = '',
     ...props
    }) => {
    const badgeClasses = [
        styles.badge,
        styles[variant],
        styles[color],
        className,
    ] .filter(Boolean).join(' ')

    return (
        <span className={badgeClasses} {...props}>
            {children}
        </span>
    )
};

Badge.prototype = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['square', 'pill']),
    color: PropTypes.oneOf([
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
    ])
}