/**
 * @package xueyan-react-markdown
 * @author xueyan <yang@xueyan.site>
 * @description doc entry
 */

import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Sidebar, { TMenu } from 'components/sidebar'
import Example from 'pages/example'
import './index.scss'

const pageList: TMenu[] = [
  {
    key: 'examples',
    name: 'examples',
    nodeList: [
      {
        key: 'example',
        name: 'example',
        path: '/example',
        component: Example
      },
    ]
  }
]

function App() {
  return (
    <BrowserRouter>
      <Sidebar header="EXAMPLES" menuList={pageList} />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
