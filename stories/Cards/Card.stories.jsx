import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Easy Deployment',
  isHovered: false,
  children:
    'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
};

export const AllCards = () => (
  <div
    style={{
      display: 'flex',
      gap: '32px',
      padding: '40px',
      backgroundColor: '#e2e8f0',
      minHeight: '300px',
      alignItems: 'center',
    }}
  >
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
        Card (Default)
      </p>
      <Card title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </Card>
    </div>

    <div style={{ flex: 1 }}>
      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
        Card (Hover)
      </p>
      <Card title="Easy Deployment" isHovered={true}>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </Card>
    </div>
  </div>
);