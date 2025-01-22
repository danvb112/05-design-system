import { Text, TextProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laboriosam vel et eligendi eaque excepturi provident cupiditate nemo, mollitia pariatur. Vitae, sequi ut molestias architecto aut dolores quibusdam nemo excepturi.",
        size: 'md',
    },
    argTypes: {
        size: {
          options: [
            'xxs',
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '4xl',
            '5xl',
            '6xl',
            '7xl',
            '8xl',
            '9xl',
          ],
          control: {
            type: 'inline-radio',
          },
        },
      },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}