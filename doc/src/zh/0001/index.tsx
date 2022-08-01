import React from 'react'
import cn from 'classnames'
import { Article, Segment } from 'ark-markdown'
import { styles as xrss } from 'xueyan-react-style'
import styles from './index.scss'

const MARK1 = `
将 markdown 文本渲染成 React 节点

\`\`\`
<Airticle>
  <Segment>{\`# 标题一\`}</Segment>
</Airticle>
\`\`\`

使用 \`react-markdown\`，\`react-syntax-highlighter\`，\`remark-gfm\` 等库封装而成。

主题使用 [xueyan-react-style](/xueyan-react-style) 实现，支持代码高亮。

> 了解 Markdown：<https://commonmark.org/help>

## 用法

> 代码高亮默认语言是 \`typescript\`

\`\`\`typescript
import { Segment, Article } from 'ark-markdown'

const MARK1 = \`
\\\`\\\`\\\`
function a() {}
\\\`\\\`\\\`
\`

function Render() {
  return (
    <Article>
      <p>一段代码：</p>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
\`\`\`

## 主题
`

const MARK2 = `
## 二级标题 \`标签\`

文字

> 说明

- 列表
  - 列表项
  - 列表项

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
      <div className={styles.showtheme}>
        <Article className={cn(xrss.xrstylelight, styles.item)}>
          <Segment>
            {'# 亮色主题\n' + MARK2}
          </Segment>
        </Article>
        <Article className={cn(xrss.xrstyledark, styles.item)}>
          <Segment darkCode={true}>
            {'# 暗色主题\n' + MARK2}
          </Segment>
        </Article>
      </div>
    </Article>
  )
}
