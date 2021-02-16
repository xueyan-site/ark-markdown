import Store, { createProvider, useData, useStore } from 'xueyan-react-store'
import { MarkdownConfig } from './types'

const MARKDOWN_CONFIG_STORE_TYPE = 'xueyan-react-markdown-config'

export const MarkdownConfigProvider = createProvider((props: MarkdownConfig) => {
  return new Store<MarkdownConfig>(MARKDOWN_CONFIG_STORE_TYPE, {
    dark: props.dark,
    darkCode: props.darkCode
  })
})

export function useMarkdownConfig(props: MarkdownConfig = {}) {
  const config = useData<MarkdownConfig>(MARKDOWN_CONFIG_STORE_TYPE)
  const realDark = props.dark !== undefined ? props.dark : config.dark
  const realDarkCode = props.darkCode !== undefined
    ? props.darkCode
    : config.darkCode !== undefined
      ? config.darkCode
      : realDark
  return {
    dark: realDark, 
    darkCode: realDarkCode
  }
}

export function useMarkdownConfigStore() {
  return useStore<Store<MarkdownConfig>>(MARKDOWN_CONFIG_STORE_TYPE)
}
