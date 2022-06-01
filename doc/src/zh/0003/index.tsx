import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
提供 Markdown 主题样式  

\`\`\`
type Article = (
  props: ArticleProps
) => JSX.Element
\`\`\`

## ArticleProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| children | 子节点 | \`? React.ReactNode\` | 子节点 |
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
