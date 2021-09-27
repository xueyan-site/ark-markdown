import React from 'react'
import Doc from 'utl/doc'
import type { PageProps } from 'xueyan-react'
import type { ArticleMeta } from 'xueyan-react-doc'

const CONTENTS: ArticleMeta[] = [
  {
    id: 'intro',
    label: '介绍',
    content: () => import('./intro')
  },
  {
    id: 'start',
    label: '快速开始',
    content: () => import('./start')
  },
  {
    id: 'components',
    label: '组件',
    children: [
      {
        id: 'article',
        label: 'Article - 提供主题样式',
        content: () => import('./article')
      },
      {
        id: 'segment',
        label: 'Segment - 翻译内容',
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
  return <Doc {...props} contents={CONTENTS} />
}
