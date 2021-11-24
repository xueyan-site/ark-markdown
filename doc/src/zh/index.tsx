import React from 'react'
import Doc from 'com/doc'
import type { PageProps } from 'xueyan-react'
import type { ArticleMeta } from 'xueyan-react-doc'

const CONTENTS: ArticleMeta[] = [
  {
    id: 'intro',
    label: '介绍',
    content: () => import('./intro')
  },
  {
    id: 'theme',
    label: '主题',
    content: () => import('./theme')
  },
  {
    id: 'start',
    label: '开始',
    content: () => import('./start')
  },
  {
    id: 'components',
    label: '组件',
    children: [
      {
        id: 'article',
        label: 'Article - 提供样式',
        content: () => import('./article')
      },
      {
        id: 'segment',
        label: 'Segment - 渲染内容',
        content: () => import('./segment')
      }
    ]
  },
  {
    id: 'tools',
    label: '工具',
    children: [
      {
        id: 'config',
        label: 'config - 配置',
        content: () => import('./config')
      }
    ]
  }
]

export default function Index(props: PageProps) {
  return <Doc {...props} language="中文" contents={CONTENTS} />
}
