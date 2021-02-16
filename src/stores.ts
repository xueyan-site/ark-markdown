import Store, { createProvider, useData, useStore } from 'xueyan-react-store'
import { MarkdownConfig } from './types'

const MARKDOWN_CONFIG_STORE_TYPE = 'xueyan-markdown-config'

export const MarkdownConfigProvider = createProvider((props: MarkdownConfig) => {
  return new Store<MarkdownConfig>(MARKDOWN_CONFIG_STORE_TYPE, props)
})

export function useMarkdownConfig({ dark, darkCode }: MarkdownConfig = {}) {
  const config = useData<MarkdownConfig>(MARKDOWN_CONFIG_STORE_TYPE)
  const realDark = dark !== undefined ? dark : config.dark
  const realDarkCode = darkCode !== undefined
    ? darkCode
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
