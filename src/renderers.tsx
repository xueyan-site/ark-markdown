import React, { createElement, Children } from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './style.scss'

const CODE_STYLE: React.CSSProperties = {
  color: undefined,
  padding: undefined,
  background: undefined,
}

export function LightCode(props: any) {
  return (
    <Highlighter
      style={atomOneLight}
      customStyle={CODE_STYLE}
      language={props.language || 'tsx'}
    >
      {props.value}
    </Highlighter>
  )
}

export function DarkCode(props: any) {
  return (
    <Highlighter
      style={atomOneDark}
      customStyle={CODE_STYLE}
      language={props.language || 'typescript'}
    >
      {props.value}
    </Highlighter>
  )
}

function flatten(text: string, child: any): any {
  if (typeof child === 'string') {
    return text + child
  } else {
    const nodes = Children.toArray(child.props.children)
    return nodes.reduce(flatten, text)
  }
}

export function Heading({ level, children }: any) {
  let text: any = Children.toArray(children).reduce(flatten, '')
  const slug = text.toLowerCase().replace(/[\s\t\v\r\f\n]+/g, '')
  return createElement(
    'h' + level,
    { id: slug },
    <a className={styles.anchor} href={'#' + slug}>{children}</a>
  )
}
