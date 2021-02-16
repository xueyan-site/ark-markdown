import React from 'react'
import { MarkdownSegment } from 'xueyan-react-markdown'

const code1 = `
\`\`\`ts
import React, { useState } from 'react'
import Switch from 'xueyan-react-markdown'

export default function UseSwitch() {
  const [state, setState] = useState<boolean>(false)
  return <Switch value={state} onChange={setState} block={true}/>
}
\`\`\`
`

export default function UseTwo() {
  return <MarkdownSegment>{code1}</MarkdownSegment>
}
