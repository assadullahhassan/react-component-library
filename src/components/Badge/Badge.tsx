import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import "./Badge.css";

export type BadgeVariant =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "purple";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(
    {
      variant = "neutral",
      size = "md",
      dot = false,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) {
    const classes = [
      "badge",
      `badge--${variant}`,
      `badge--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        {dot && (
          <span
            className="badge__dot"
            aria-hidden="true"
          />
        )}

        {icon && (
          <span
            className="badge__icon"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}

        <span className="badge__label">
          {children}
        </span>
      </span>
    );
  }
);

Badge.displayName = "Badge";