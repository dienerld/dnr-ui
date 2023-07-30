import { type StoryObj, type Meta } from '@storybook/vue3'
import DTypography, { type DTypographyProps } from './DTypography.vue'
import DCard from '../DCard'
const meta: Meta<typeof DTypography> = {
  title: 'Components/DTypography',
  component: DTypography,
  argTypes: {
    default: {
      type: 'string'
    },
    is: {
      description: 'Tag of component',
      options: ['h1', 'h2', 'h3', 'h4', 'span', 'p', 'a'],
      type: 'string',
      control: 'select'
    },
    variant: {
      description: 'Variant of component',
      options: ['h1', 'h2', 'h3', 'h4', 'span', 'p', 'a'],
      type: 'string',
      control: 'select'
    },
    class: {
      type: 'string'
    }
  }
}

type Story = StoryObj<typeof DTypography>
export default meta

export const H1: Story = {
  args: {
    is: 'h1',
    default: 'Typography h1'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard >
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
    </DCard>
    `
  })
}
export const H2: Story = {
  args: {
    is: 'h2',
    default: 'Typography h2'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}

export const H3: Story = {
  args: {
    is: 'h3',
    default: 'Typography h3'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}

export const H4: Story = {
  args: {
    is: 'h4',
    default: 'Typography h4'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}

export const Span: Story = {
  args: {
    is: 'span',
    default: 'Typography span'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}

export const P: Story = {
  args: {
    is: 'p',
    default: 'Typography p'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}

export const Label: Story = {
  args: {
    is: 'label',
    default: 'Typography label'
  },
  render: (args: DTypographyProps) => ({
    components: { DTypography, DCard },
    setup() {
      return { args }
    },
    template: `
    <DCard>
      <DTypography v-bind="args">
        {{ args.default }}
      </DTypography>
      </DCard>
    `
  })
}
