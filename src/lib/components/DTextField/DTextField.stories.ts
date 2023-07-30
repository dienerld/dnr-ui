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
      options: ['text', 'password', 'email'],
      type: 'string',
      control: 'select'
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

export const Default: Story = {
  args: {
    placeholder: 'Placeholder'
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true
  }
}

export const DefaultError: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true
  }
}

export const DefaultErrorWithMessage: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
    helperText: 'This is a helper text'
  }
}

export const Password: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'password'
  }
}

export const PasswordError: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'password',
    error: true
  }
}

export const PasswordErrorWithMessage: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'password',
    error: true,
    helperText: 'This is a helper text'
  }
}

export const Email: Story = {
  args: {
    placeholder: 'Placeholder',
    type: 'email'
  }
}
