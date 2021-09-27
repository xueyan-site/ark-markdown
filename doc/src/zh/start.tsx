import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
## 下载

\`\`\`bash
npm i xueyan-react-pages
\`\`\`

\`\`\`bash
yarn add xueyan-react-pages
\`\`\`
`

const MARK2 = `
## 使用

> 备注： Article提供样式和主题，Segment负责解析内容。

\`\`\`typescript
import React from 'react'
imoprt { Article, Segment } from 'xueyan-react-markdown'
\`\`\`
\`\`\`typescript
const MARK1 = \`${MARK1.replace(/\`/g, '\\\`')}\`
\`\`\`
\`\`\`typescript
React.render((
  <Article>
    <Segment>{MARK1}</Segment>
    ...
  </Article>
), document.getElementById('app'))
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Segment>{MARK2}</Segment>
    </Article>
  )
}
