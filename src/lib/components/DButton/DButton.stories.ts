import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import DButton, { type ButtonProps } from './DButton.vue'

import AcademicCapIcon from '@/lib/icons/AcademicCap.vue'
const meta: Meta<typeof DButton> = {
  component: DButton,
  title: 'Components/DButton',
  argTypes: {
    variant: {
      options: ['contained', 'outline', 'minimal', 'icon'],
      control: 'radio'
    },
    color: {
      type: 'string',
      options: ['primary', 'secondary'],
      control: 'radio'
    },
    disabled: {
      type: 'boolean',
      control: 'boolean'
    },
    size: {
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg'],
      control: 'radio'
    },
    fullWidth: {
      type: 'boolean',
      control: 'boolean'
    },
    class: {
      type: 'string',
      control: 'text'
    },
    rounded: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false
    },
    type: {
      options: ['submit', 'reset', 'button'],
      type: 'string',
      control: 'select',
      defaultValue: 'button'
    },
    default: {
      type: 'string',
      control: 'text'
    }
  },
  args: {
    disabled: false,
    variant: 'contained',
    size: 'md',
    fullWidth: false,
    rounded: false
  }
} satisfies Meta<typeof DButton>

export default meta
type Story = StoryObj<typeof DButton>

export const Contained: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return {
        args,
        onClick: action('onClick')
      }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.default || args.variant }}</DButton>'
  })
}

export const Outline: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.children || args.variant }}</DButton>'
  }),
  args: {
    variant: 'outline'
  }
}

export const Minimal: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.children || args.variant }}</DButton>'
  }),
  args: {
    variant: 'minimal'
  }
}

export const ContainedDisabled: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.children || args.variant }}</DButton>'
  }),
  args: {
    variant: 'contained',
    disabled: true
  }
}

export const OutlineDisabled: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.children || args.variant }}</DButton>'
  }),
  args: {
    variant: 'outline',
    disabled: true
  }
}

export const MinimalDisabled: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick">{{ args.children || args.variant }}</DButton>'
  }),
  args: {
    variant: 'minimal',
    disabled: true
  }
}

export const Icon: Story = {
  render: (args: ButtonProps) => ({
    components: { DButton, AcademicCapIcon },
    setup() {
      return { args, onClick: action('onClick') }
    },
    template:
      '<DButton v-bind="args" @click="onClick"><AcademicCapIcon class="text-primary"/></DButton>'
  }),
  args: {
    variant: 'icon'
  }
}
