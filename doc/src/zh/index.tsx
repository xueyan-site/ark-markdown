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
    id: 'a',
    label: '主题',
    content: () => import('./theme')
  },
  {
    id: 'b',
    label: '快速开始',
    content: () => import('./start')
  },
  {
    id: 'c',
    label: '组件',
    children: [
      {
        id: 'ca',
        label: 'Article - 提供主题样式',
        content: () => import('./article')
      },
      {
        id: 'cb',
        label: 'Segment - 翻译内容',
        content: () => import('./segment')
      }
    ]
  },
  {
    id: 'd',
    label: '工具',
    children: [
      {
        id: 'da',
        label: 'config - 配置',
        content: () => import('./config')
      }
    ]
  }
]

export default function Index(props: PageProps) {
  return <Doc {...props} contents={CONTENTS} />
}
