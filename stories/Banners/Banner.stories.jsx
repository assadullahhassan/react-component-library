import { Banner } from './Banner'
import { options } from "./constants";

export default {
    title: 'Components/Banner',
    component: Banner,
    args: {
        title: 'Congratulations',
        variant: 'multiline',
        description: 'You have successfully completed the task.',
        type: 'success'
    },
    argTypes: {
        variant: {
            control: { type: 'select'},
            options: options.variant
        },
        type: {
            control: { type: 'select'},
            options: options.types 
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
    items: options.types.map((type) => ({ type })),
    variant: 'multiline',
}

export const SingleLine = ListTemplate.bind({})
SingleLine.args = {
    items: options.types.map((type) => ({ type })),
    variant: 'singleline',
}