import type { Meta, StoryObj } from '@storybook/vue3'
import DCard, { type DCardProps } from './DCard.vue'
import DTypography from '../DTypography/DTypography.vue'

const meta: Meta<typeof DCard> = {
  component: DCard,
  title: 'Components/DCard',
  argTypes: {
    default: {
      type: 'string'
    },
    class: {
      type: 'string',
      control: 'text'
    },
    overlay: {
      type: 'boolean',
      control: 'boolean'
    },
    elevation: {
      options: ['none', '1', '2', '3'],
      type: 'string',
      control: 'radio',
      defaultValue: 'none'
    }
  },
  render: (args: DCardProps) => ({
    components: { DCard, DTypography },
    setup() {
      return { args }
    },
    template: `
      <DCard v-bind="args">
        <DTypography is="p">
          {{ args.default }}
        </DTypography>
      </DCard>
    `
  })
} satisfies Meta<typeof DCard>

export default meta
type Story = StoryObj<typeof DCard>

export const Default: Story = {
  args: {
    default: 'Card Default',
    class: ''
  }
}

export const Overlay: Story = {
  args: {
    default: 'Overlay',
    overlay: true
  }
}
