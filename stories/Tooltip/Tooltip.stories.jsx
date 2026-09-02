import React from 'react';
import { Tooltip } from './Tooltip';
import { options } from './constants';

const ArchiveIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="16" height="4" rx="1" />
    <path d="M4 7v9a2 2 0 002 2h8a2 2 0 002-2V7" />
    <path d="M8 11h4" />
  </svg>
);

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
  theme: 'dark',
  title: 'Archive notes',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.',
  icon: <ArchiveIcon />,
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: options.theme,
    },
    title: { control: 'text' },
    children: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});

export const White = Template.bind({});
White.args = {
  ...Default.args,
  theme: 'white',
};

export const AllThemes = () => {
  const themes = [
    { name: 'dark' },
    { name: 'white' },
    { name: 'blue' },
    { name: 'blue-light' },
    { name: 'purple' },
    { name: 'pink-light' },
    { name: 'green' },
    { name: 'green-light' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px 24px',
        maxWidth: '800px',
        padding: '20px',
        backgroundColor: '#f1f3f5',
        borderRadius: '12px',
      }}
    >
      {themes.map((t) => (
        <Tooltip
          key={t.name}
          theme={t.name}
          title="Archive notes"
          icon={<ArchiveIcon />}
          onClose={() => console.log(`Closed ${t.name}`)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
        </Tooltip>
      ))}
    </div>
  );
};