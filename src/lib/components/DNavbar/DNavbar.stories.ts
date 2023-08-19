import { type StoryObj, type Meta } from '@storybook/vue3'
import Logo from '../../../docs/assets/logo-vue.svg'
import DNavbar from './DNavbar.vue'
import { DTypography } from '@/lib'

const meta: Meta<typeof DNavbar> = {
  title: 'Components/DNavbar',
  component: DNavbar,

  render: (args) => ({
    components: { DNavbar, DTypography },
    setup() {
      return { args }
    },
    template: `<DNavbar v-bind="args">
      <template #icon>
        <img src="${Logo}"
          class="h-full w-full text-primary" />
      </template>
      <template #long>
        <DTypography is="p">Long</DTypography>
      </template>
      <template #short>
        <DTypography is="p">Short</DTypography>
      </template>
    </DNavbar>`
  })
}

export default meta

type Story = StoryObj<typeof DNavbar>

export const Default: Story = {
  args: {}
}
