# xueyan-react-markdown-doc

xueyan-react-markdown-doc is a react application.

The project created by xueyan <yang@xueyan.site>.

## Example

```ts
import React, { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages, { PageSources } from 'xueyan-react-pages'

const Readme = lazy(() => import('./readme'))
const Example1 = lazy(() => import('./examples/example1'))

const sources: PageSources = {
  zh: {
    header: 'xueyan-react-pages',
    groupList: [
      {
        nodeList: [
          {
            path: '/readme',
            name: 'README',
            component: Readme
          }
        ]
      },
      {
        name: '示例',
        nodeList: [
          {
            path: '/example1',
            name: '示例1',
            component: Example1
          }
        ]
      }
    ]
  }
}

function App() {
  return (
    <BrowserRouter>
      <Pages sources={sources} />
    </BrowserRouter>
  )
}
```
