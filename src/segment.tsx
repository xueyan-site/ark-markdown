import React from 'react'
import Markdown from 'react-markdown/with-html'
import remarkGFM from 'remark-gfm'
import { useColorMode } from 'xueyan-react-style'
import { DarkCode, LightCode, Heading } from './renderers'
import type { ReactMarkdownProps } from 'react-markdown'

export type SegmentProps = ReactMarkdownProps & {
  darkCode?: boolean
}

export function Segment({ darkCode, ...props }: SegmentProps) {
  const colorMode = useColorMode()
  const dark = darkCode !== undefined 
    ? darkCode
    : colorMode === 'dark' 
    ? true
    : false
  return (
    <Markdown
      linkTarget="_blank"
      allowDangerousHtml={true}
      {...props as any}
      plugins={[remarkGFM]}
      renderers={{
        code: dark ? DarkCode : LightCode,
        heading: Heading
      }}
    />
  )
}
