import Store, { createProvider, useData, useStore } from 'xueyan-react-store'
import { MarkdownConfig } from './types'

const STORE_KEY = 'XT_S_MARKDOWN'

export const MarkdownConfigProvider = createProvider((props: MarkdownConfig) => {
  return new Store<MarkdownConfig>(STORE_KEY, {
    dark: props.dark,
    darkCode: props.darkCode
  })
})

export function useMarkdownConfig(props: MarkdownConfig = {}) {
  const config = useData<MarkdownConfig>(STORE_KEY)
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
  return useStore<Store<MarkdownConfig>>(STORE_KEY)
}
