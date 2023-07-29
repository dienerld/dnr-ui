import { type StoryObj, type Meta } from '@storybook/vue3'
import DTypography, { type DTypographyProps } from './DTypography.vue'
import DCard from '../DCard'

const meta: Meta<DTypographyProps> = {
  title: 'Components/DTypography',
  component: DTypography,
  argTypes: {
    is: {
      description: 'Tag of component',
      options: ['h1', 'h2', 'h3', 'h4', 'span', 'p', 'a'],
      type: 'string',
      control: 'select',
      defaultValue: 'h1'
    },
    variant: {
      description: 'Variant of component',
      options: ['h1', 'h2', 'h3', 'h4', 'span', 'p', 'a'],
      type: 'string',
      control: 'select',
      defaultValue: 'p'
    },
    class: {
      description: 'Class of component',
      type: 'string'
    },
    children: {
      type: 'string'
    }
  }
}

type Story = StoryObj<DTypographyProps>
export default meta

export const Primary: Story = {
  args: {
    is: 'h1',
    children: 'Typography'
  },
  render: (args: any) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
      <DCard >
      <DTypography v-bind="args">
        {{ args.children }}
      </DTypography>
    </DCard>
    `
  })
}
export const Secondary: Story = {
  args: {
    is: 'h2',
    children: 'Typography'
  },
  render: (args: any) => ({
    components: { DTypography },
    setup() {
      return { args }
    },
    template: `
      <DTypography v-bind="args">
        {{ args.children }}
      </DTypography>
    `
  })
}
