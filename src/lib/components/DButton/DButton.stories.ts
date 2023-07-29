// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import DButton, { type ButtonProps } from './DButton.vue'

const meta: Meta<typeof DButton> = {
  component: DButton,
  tags: ['autodocs'],
  title: 'Components/DButton',

  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'minimal'],
      control: 'radio',
      defaultValue: 'contained'
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false
    },
    size: {
      type: 'string',
      options: ['sm', 'md', 'lg'],
      control: 'radio',
      defaultValue: 'md'
    },
    fullWidth: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false
    },

    color: {
      options: ['primary', 'secondary', 'custom'],
      type: 'string',
      control: 'radio',
      defaultValue: 'primary'
    },
    class: {
      type: 'string',
      control: 'text'
    }
  },
  args: {
    disabled: false,
    color: 'primary',
    variant: 'contained',
    size: 'md',
    fullWidth: false
  }
} satisfies Meta<typeof DButton>

export default meta
type Story = StoryObj<typeof DButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return {
        args,
        onClick: action('onClick')
      }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.variant }}</DButton>'
  })
}

export const Secondary: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.variant }}</DButton>'
  }),
  args: {
    variant: 'outlined'
  }
}

export const Tertiary: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" class="args.class" @click="onClick">{{ args.variant }}</DButton>'
  }),
  args: {
    variant: 'minimal'
  }
}

export const Disabled: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" class="args.class" @click="onClick">{{ args.variant }}</DButton>'
  }),
  args: {
    variant: 'contained',
    disabled: true
  }
}
