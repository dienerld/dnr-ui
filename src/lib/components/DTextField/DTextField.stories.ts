import { type StoryObj, type Meta } from '@storybook/vue3'

import DTextField from './DTextField.vue'
import DCard from '../DCard/DCard.vue'

const meta: Meta<typeof DTextField> = {
  title: 'Components/DTextField',
  component: DTextField,
  argTypes: {
    onInput: { action: 'input' },
    onChange: { action: 'changed' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email']
      }
    },
    placeholder: {
      type: 'string'
    },
    disabled: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    class: {
      type: 'string'
    },
    inputClass: {
      type: 'string'
    },
    spanClass: {
      type: 'string'
    },
    error: {
      type: 'boolean'
    },
    helperText: {
      type: 'string'
    },
    fullWidth: {
      type: 'boolean'
    }
  },

  render: (args) => ({
    components: { DTextField, DCard },
    setup() {
      return { args }
    },
    template: `
      <DTextField v-bind="args" />
    `
  })
}

export default meta

type Story = StoryObj<typeof DTextField>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const DefaultError: Story = {
  args: {
    error: true
  }
}

export const Password: Story = {
  args: {
    type: 'password'
  }
}
