import type { Meta, StoryObj } from '@storybook/react'

import LoadingPanel from '@/components/LoadingPanel'

const meta: Meta<typeof LoadingPanel> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/LoadingPanel',
  component: LoadingPanel,
}

export default meta
type Story = StoryObj<typeof LoadingPanel>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}
