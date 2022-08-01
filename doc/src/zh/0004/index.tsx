import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
将 Markdown 文本转换成 ReactNode

\`\`\`
type Segment = (
  props: SegmentProps
): JSX.Element
\`\`\`

## SegmentProps

继承 [ReactMarkdownProps](https://github.com/remarkjs/react-markdown#props) 所有属性

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| darkCode | 代码暗黑模式 | \`? boolean\` | 优先级高于页面主题配置 |
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
