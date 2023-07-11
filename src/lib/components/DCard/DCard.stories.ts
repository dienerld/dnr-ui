// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'
import DCard, { type DCardProps } from './DCard.vue'

const meta: Meta<typeof DCard> = {
  component: DCard,
  title: 'Components/DCard',
  tags: ['autodocs'],
  argTypes: {
    default: {
      type: 'string'
    },
    class: {
      type: 'string',
      description: 'tailwind class',
      control: 'text'
    },
    color: {
      options: ['primary', 'secondary', 'custom'],
      type: 'string',
      control: 'radio',
      defaultValue: 'primary'
    },
    elevation: {
      options: ['none', '1', '2', '3'],
      type: 'string',
      control: 'radio',
      defaultValue: 'none'
    }
  },
  render: (args: DCardProps) => ({
    components: { DCard },
    setup() {
      return { args }
    },
    template: `
      <DCard v-bind="args">
        {{ args.default }}
      </DCard>
    `
  })
} satisfies Meta<typeof DCard>

export default meta
type Story = StoryObj<typeof DCard>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    default: 'primary',
    class: '',
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    default: 'Secondary',
    class: '',
    color: 'secondary'
  }
}

export const Custom: Story = {
  args: {
    default: 'Custom background',
    class: 'bg-red-500 text-white',
    color: 'custom'
  }
}
