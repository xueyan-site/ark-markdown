import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
## xueyan-react-markdown

渲染 markdown 文本的 React 组件。  

封装了 \`react-markdown\`，\`react-syntax-highlighter\`，\`remark-gfm\` 等库。内设黑白两套主题，支持高亮代码，可分成多段 markdown 文本进行渲染。  

> 了解 Markdown：<https://commonmark.org/help>。

## 用法

\`\`\`typescript
import { Segment, Airticle } from 'xueyan-react-markdown'

function Render() {
  return (
    <Airticle>
      <Segment>
        {'# 标题一'}
      </Segment>
    </Airticle>
  )
}
\`\`\`

## 主题
`

const MARK2 = `
## 二级标题

### 三级标题 \`标签\`

---

- list
  - list item
  - list item

> 这是一行注释

\`\`\`typescript
function render() {
  return (
    <div>Hello, world!</div>
  )
}
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '16px' }}>
          <Segment>{'# 亮色主题\n'+MARK2}</Segment>
        </div>
        <div style={{ flex: 1, backgroundColor: '#000', padding: '16px' }}>
          <Segment dark={true} darkCode={true}>{'# 暗色主题\n'+MARK2}</Segment>
        </div>
      </div>
    </Article>
  )
}
