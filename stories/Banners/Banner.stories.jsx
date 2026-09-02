import { Banner } from './Banner'
import { options } from "./constants";

export default {
    title: 'Components/Banner',
    component: Banner,
    args: {
        title: 'Congratulations',
        variant: 'multi-line',
        description: 'You have successfully completed the task.',
        color: 'success'
    },
    argTypes: {
        variant: {
            control: { type: 'select'},
            options: options.variant
        },
        color: {
            control: { type: 'select'},
            options: options.colors 
        }
    }
}

const Template = (args) => <Banner {...args} />

const ListTemplate = ({items, ...args}) => 
    items.map((item, index) => 
        <Banner key={index} {...args} {...item} />
    )

export const Default = Template.bind({});

export const MultiLine = ListTemplate.bind({})
MultiLine.args = {
    items: options.colors.map((color) => ({ color })),
    variant: 'multi-line',
}

export const SingleLine = ListTemplate.bind({})
SingleLine.args = {
    items: options.colors.map((color) => ({ color })),
    variant: 'single-line',
}