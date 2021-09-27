import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
Segment 负责翻译 Markdown 文本，将文本转换成 ReactNode。  

Segment 只负责转换工作，本身并不包含样式。

若要翻译后的节点带有样式效果，则需要放在 Article 组件内。  

## Props

| 字段 | 类型 | 默认值 | 含义 |
|-|-|-|-|
|className|? \`string\`|-|最外层DOM类名|
|children|? \`string\`|-|Markdown 文本|
|dark|? \`boolean\`|Article.dark|是否开启暗黑模式|
|darkCode|? \`boolean\`|Article.darkCode|是否开启暗黑模式（仅针对代码）|

当使用了 className，或 dark 为true时，渲染后的节点外层会包裹一个DIV，用以绑定类名。

没有指定 Segment 主题时，使用 Article 的设定。

darkCode 优先级高于 dark，当指定 darkCode 后，代码主题以 darkCode 值为准。

Segment 继承了 ReactMarkdown 组件的 Props。

ReactMarkdown 的 Props 详见 <https://github.com/remarkjs/react-markdown#api>。
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
