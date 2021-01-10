/**
 * @package xueyan-react-markdown
 * @author xueyan <yang@xueyan.site>
 * @description package entry
 */

import React, { ElementType, useMemo  } from 'react'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import remarkGFM from 'remark-gfm'
import Highlighter from 'react-syntax-highlighter'
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './index.module.scss'

function getRenderers(lightCode?: boolean): {
  [nodeType: string]: ElementType
} {
  const codeStyle = lightCode ? atomOneLight : atomOneDark
  const customStyle: React.CSSProperties = {
    borderRadius: '16px',
    padding: '16px',
    fontFamily: 'Consolas, "Courier New", monospace'
  }
  if (lightCode) {
    customStyle.boxShadow = '0 0 16px rgba(0,0,0,.1)'
  }
  return {
    code: props => (
      <div className={styles.codeBlock}>
        <Highlighter
          style={codeStyle}
          customStyle={customStyle}
          children={props.value}
          language={props.language}
        />
      </div>
    )
  }
}

export type MarkdownProps = ReactMarkdownProps & {
  lightCode?: boolean
}

export default function Markdown({ lightCode, ...props }: MarkdownProps) {
  const renderers = useMemo(() => getRenderers(lightCode), [lightCode])
  return (
    <ReactMarkdown
      {...props}
      renderers={renderers}
      plugins={[remarkGFM]}
    />
  )
}
