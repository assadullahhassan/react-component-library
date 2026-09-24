import type { Meta, StoryObj } from "@storybook/react-vite";

import { Banner } from "./Banner";

const meta = {
  title: "Components/Banner",
  component: Banner,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        'multiline', 'singleline'
      ],
    },

    type: {
      control: "inline-radio",
      options: [
        'success', 'warning', 'error', 'neutral'
      ],
    },

    icon: {
      control: false,
    },
  },

  args: {
    children: "Banner",
    variant: "singleline",
    type: "success",
  },
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Types: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      <Banner type="neutral">
        Neutral
      </Banner>

      <Banner type="success">
        Success
      </Banner>

      <Banner type="warning">
        Warning
      </Banner>

      <Banner type="error">
        Error
      </Banner>

      <Banner type="neutral">
        Neutral
      </Banner>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Banner variant="singleline" type="success">
        Singleline 
      </Banner>

      <Banner variant="multiline" type="success">
        Multiline
      </Banner>
    </div>
  ),
};
