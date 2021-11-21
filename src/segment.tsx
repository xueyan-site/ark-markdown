import React, { createElement, Children } from 'react'
import cn from 'classnames'
import Markdown from 'react-markdown/with-html'
import remarkGFM from 'remark-gfm'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useMarkdownConfig } from './store'
import { SegmentProps } from './types'
import styles from './index.scss'

const codeStyle: React.CSSProperties = {
  color: undefined,
  padding: undefined,
  background: undefined,
}

const lightCodeRenderer: React.ElementType = props => (
  <Highlighter
    style={atomOneLight}
    customStyle={codeStyle}
    language={props.language}
  >
    {props.value}
  </Highlighter>
)

const darkCodeRenderer: React.ElementType = props => (
  <Highlighter
    style={atomOneDark}
    customStyle={codeStyle}
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

export default function Segment({ dark, darkCode, className, ...props }: SegmentProps) {
  const config = useMarkdownConfig({ dark, darkCode })
  return (
    <Markdown
      linkTarget="_blank"
      allowDangerousHtml={true}
      {...props as any}
      className={cn(className, config.dark && styles.dark)}
      plugins={[remarkGFM]}
      renderers={{
        code: config.darkCode ? darkCodeRenderer : lightCodeRenderer,
        heading: headerRenderer
      }}
    />
  )
}
