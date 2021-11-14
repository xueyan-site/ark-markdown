import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
## xueyan-react-markdown

这是一个渲染 markdown 文本的 React 组件。  

其内部封装了 \`react-markdown\`，\`react-syntax-highlighter\`，\`remark-gfm\` 库。  

> 了解 Markdown：<https://commonmark.org/help>。
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

const MARK3 = `
## 亮点

1、内置黑白两套样式。  

2、内置代码高亮库。  

3、可分成多段 markdown 文本进行渲染，片段之间可以插入任意 React 节点。  
`

const MARK4 = `
## 适用场景

1、展示代码。  

2、演示说明。  

3、书写文章。  

4、介绍作品。  
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Segment>## 样式</Segment>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '16px' }}>
          <Segment>{'# Light\n'+MARK2}</Segment>
        </div>
        <div style={{ flex: 1, backgroundColor: '#000', padding: '16px' }}>
          <Segment dark={true} darkCode={true}>{'# Dark\n'+MARK2}</Segment>
        </div>
      </div>
      <Segment>{MARK3}</Segment>
      <Segment>{MARK4}</Segment>
      <Segment>## 标志</Segment>
      <img style={{ width: '128px' }} src={XT_PATH+'project.png'} />
    </Article>
  )
}
