import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "neutral",
        "info",
        "success",
        "warning",
        "danger",
        "purple",
      ],
    },

    size: {
      control: "inline-radio",
      options: [
        "sm",
        "md",
        "lg",
      ],
    },

    dot: {
      control: "boolean",
    },

    icon: {
      control: false,
    },
  },

  args: {
    children: "Badge",
    variant: "neutral",
    size: "md",
    dot: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <Badge variant="neutral">
        Neutral
      </Badge>

      <Badge variant="info">
        Info
      </Badge>

      <Badge variant="success">
        Success
      </Badge>

      <Badge variant="warning">
        Warning
      </Badge>

      <Badge variant="danger">
        Danger
      </Badge>

      <Badge variant="purple">
        Purple
      </Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Badge size="sm">
        Small
      </Badge>

      <Badge size="md">
        Medium
      </Badge>

      <Badge size="lg">
        Large
      </Badge>
    </div>
  ),
};

export const WithDot: Story = {
  args: {
    variant: "success",
    dot: true,
    children: "Online",
  },
};

export const LongLabel: Story = {
  render: () => (
    <div style={{ width: 180 }}>
      <Badge>
        This is a very long badge label
      </Badge>
    </div>
  ),
};