import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
Article 提供主题样式，本身不具备翻译 Markdown 的能力。  

抽离 Article 组件，是为了保持 Markdown 渲染的纯粹性，以便于用户自定义样式。  

## Props

| 字段 | 类型 | 默认值 | 含义 |
|-|-|-|-|
|className|? \`string\`|-|最外层DOM类名|
|style|? \`React.CSSProperties\`|-|最外层DOM样式|
|children|? \`React.ReactNode\`|-|内容|
|dark|? \`boolean\`|-|是否开启暗黑模式|
|darkCode|? \`boolean\`|-|是否开启暗黑模式（仅针对代码）|

darkCode 优先级高于 dark，当指定 darkCode 后，代码主题以 darkCode 值为准。
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
