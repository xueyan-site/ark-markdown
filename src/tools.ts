import { createContext, useContext } from 'react'
import { MarkdownConfig } from './types'

export const MarkdownConfigContext = createContext<MarkdownConfig>({})

export function useMarkdownConfig({ dark, darkCode }: MarkdownConfig) {
  const config = useContext(MarkdownConfigContext)
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
