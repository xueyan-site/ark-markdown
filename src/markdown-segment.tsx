import React, { createElement, ElementType, Children } from 'react'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useMarkdownConfig } from './tools'
import { MarkdownSegmentProps } from './types'
import styles from './index.module.scss'

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

const flatten = (text: string, child: any) => {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text)
}

const headerRenderer: React.ElementType = props => {
  let text = Children.toArray(props.children).reduce(flatten, '')
  const slug = text.toLowerCase().replace(/[\s\t\v\r\f\n]+/g, '')
  return createElement('h' + props.level, { id: slug }, props.children, (
    <a className={styles.anchor} href={'#' + slug}>#</a>
  ))
}

export default function MarkdownSegment({ dark, darkCode, className, ...props }: MarkdownSegmentProps) {
  const config = useMarkdownConfig({ dark, darkCode })
  let segmentCls: string | undefined = undefined
  if (className) {
    segmentCls = classNames(className, config.dark && styles.dark)
  }
  const renderers: { [nodeType: string]: ElementType } = {
    code: config.dark ? darkCodeRenderer : lightCodeRenderer,
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
