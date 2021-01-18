import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGFM from 'remark-gfm'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Config, MarkdownSegmentProps } from './common'

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

const lightCodeRender: React.ElementType = props => (
  <Highlighter
    style={atomOneLight}
    customStyle={lightCodeStyle}
    language={props.language}
  >
    {props.value}
  </Highlighter>
)

const darkCodeRender: React.ElementType = props => (
  <Highlighter
    style={atomOneDark}
    customStyle={darkCodeStyle}
    language={props.language}
  >
    {props.value}
  </Highlighter>
)

export default function MarkdownSegment({ dark, darkCode, className, ...props }: MarkdownSegmentProps) {
  const config = useContext(Config)
  const realDark = dark !== undefined ? dark : config.dark
  const realDarkCode = darkCode !== undefined
    ? darkCode
    : config.darkCode !== undefined
      ? config.darkCode
      : realDark
  return (
    <ReactMarkdown
      {...props}
      plugins={[remarkGFM]}
      renderers={{ code: realDarkCode ? darkCodeRender : lightCodeRender }}
    />
  )
}
