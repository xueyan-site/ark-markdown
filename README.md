# xueyan-react-markdown

xueyan-react-markdown 是一个 react markdown 组件包。  
xueyan-react-markdown is a react markdown component.  

本项目创建自 xueyan <yang@xueyan.site>。  
The project created by xueyan <yang@xueyan.site>.  

## 下载 Install

```bash
# 如果你使用的是NPM：
# if you use NPM: 
npm i xueyan-react-markdown

# 如果你使用的是Yarn：
# if you use Yarn: 
yarn add xueyan-react-markdown
```

## 示例 Example

```ts
import React from 'react'
import { MarkdownAirticle, MarkdownSegment } from 'xueyan-react-markdown'

const content = `
# h1 Heading

> description...  

## h2 Heading

- list
  - list item
  - list item

---

### h3 Heading

`code_tag`  

\`\`\`typescript
console.log('this is code demo')
\`\`\`

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'
`

export default function Example() {
  return (
    <MarkdownAirticle dark={true}>
      <MarkdownSegment>{test}</MarkdownSegment>
    </MarkdownAirticle>
  )
}
```
