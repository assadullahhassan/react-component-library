import { Children } from 'react';
import { Badge } from './Badge'
import { options } from "./constants";

export default {
    title: 'Components/Badge',
    component: Badge,
    args: {
      children: 'Badge',
      variant: 'square',
      color: 'blue',
    },
    argTypes: {
        variant: {
            control: { type: 'select'},
            options: options.variant,
        },
        color: {
            control: { type: 'select'},
            options: options.colors,
        }
    }
}

const Template = (args) => <Badge {...args} />

const ListTemplate = ({items, ...args}) => 
    items.map((item, index) => 
        <Badge key={index} {...args} {...item} />
    ) 


export const Default = Template.bind({});

export const Square = ListTemplate.bind({})
Square.args = {
    items: options.colors.map((color) => ({ color })),
    variant: 'square',
}

export const Pill = ListTemplate.bind({})
Pill.args = {
    items: options.colors.map((color) => ({ color })),
    variant: 'pill',
}