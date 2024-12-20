import { Heading, HeadingProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Typography/Heading',
    component: Heading,

    args: {
        children: "Custom Title"
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
}