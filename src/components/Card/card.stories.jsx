import React from 'react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        joke: {
            control: 'text'
        },
        punchline: {
            control: 'text'
        },
        
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    joke: 'ABBA',
    punchline: 'Punchline here',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    joke: 'ABBA',
    punchline: 'Punchline here',
}