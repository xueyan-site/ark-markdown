import React, { createElement, ElementType, Children } from 'react'
import cn from 'classnames'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useMarkdownConfig } from './store'
import { SegmentProps } from './types'
import styles from './index.scss'

const commonCodeStyle: React.CSSProperties = {
  borderRadius: '6px',
  padding: 'none'
}

const lightCodeStyle: React.CSSProperties = {
  ...commonCodeStyle,
  backgroundColor: '#f6f8fa'
}

const darkCodeStyle: React.CSSProperties = {
  ...commonCodeStyle,
}

const lightCodeRenderer: React.ElementType = props => (
  <Highlighter
    style={atomOneLight}
    customStyle={lightCodeStyle}
    language={props.language}
  >
    {props.value}
  </Highlighter>
)

const darkCodeRenderer: React.ElementType = props => (
  <Highlighter
    style={atomOneDark}
    customStyle={darkCodeStyle}
    language={props.language}
  >
    {props.value}
  </Highlighter>
)

const flatten: any = (text: string, child: any) => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text)
}

const headerRenderer: React.ElementType = ({ level, children }) => {
  let text: any = Children.toArray(children).reduce(flatten, '')
  const slug = text.toLowerCase().replace(/[\s\t\v\r\f\n]+/g, '')
  return createElement(
    'h' + level,
    { id: slug },
    <a className={styles.anchor} href={'#' + slug}>{children}</a>
  )
}

export default function MarkdownSegment({ dark, darkCode, className, ...props }: SegmentProps) {
  const config = useMarkdownConfig({ dark, darkCode })
  let segmentCls: string | undefined = undefined
  if (className || config.dark) {
    segmentCls = cn(className, config.dark && styles.dark)
  }
  const renderers: { [nodeType: string]: ElementType } = {
    code: config.darkCode ? darkCodeRenderer : lightCodeRenderer,
    heading: headerRenderer
  }
  return (
    <ReactMarkdown
      {...props as any}
      className={segmentCls}
      plugins={[remarkGFM]}
      renderers={renderers}
      allowDangerousHtml={true}
    />
  )
}
