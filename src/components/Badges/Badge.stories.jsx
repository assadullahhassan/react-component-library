import { Children } from 'react';
import { Badge, badge } from './Badge'

// export default {
//     title: 'Components/Badge',
//     component: Badge,
//     argTypes: {
//         variant: {
//             control: { type: 'select'},
//             options: ['square', 'pill'],
//         },
//         color: {
//             control: { type: 'select'},
//             options: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
//         }
//     }
// }

// const Template = (args) => <Badge {...args} />

// export const Default = Template.bind({});
// Default.args = {
//     Children: 'Badge',
//     variant: 'square',
//     color: 'gray',
// }

// export const GreenPill = Template.bind({});
// GreenPill.args = {
//     Children: 'Badge',
//     variant: 'pill',
//     color: 'green',
// };

export const AllVariants = () => {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const variants = ['square', 'pill'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {variants.map((variant) => (
        <div key={variant}>
          <h3 style={{ textTransform: 'capitalize', marginBottom: '12px' }}>
            {variant}
          </h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <Badge key={color} variant={variant} color={color}>
                Badge
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};