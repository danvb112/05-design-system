import { Text, TextProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laboriosam vel et eligendi eaque excepturi provident cupiditate nemo, mollitia pariatur. Vitae, sequi ut molestias architecto aut dolores quibusdam nemo excepturi."
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}