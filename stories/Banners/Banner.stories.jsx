import { Banner } from './Banner'
import { options } from "./constants";

export default {
    title: 'Banner',
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

export const Default = Template.bind({});