import React from 'react'
import { PageDoc } from 'com/page-doc'
import { ComponentIcon } from 'sicon'
import pkg from '../../../package.json'
import type { PageProps } from 'sdin-react'
import type { Collection } from 'ark-doc'

const COMPONENT_ICON = <ComponentIcon color="var(--blue)" />

const COLLECTIONS: Collection<string,string>[] = [
  {
    value: '9999',
    label: '指南',
    contents: [
      {
        value: '0001',
        label: '介绍',
        content: () => import('./0001')
      },
      {
        value: '0002',
        label: '渲染效果',
        content: () => import('./0002')
      }
    ]
  },
  {
    value: '9998',
    label: '接口文档',
    contents: [
      {
        value: '0003',
        label: 'Article',
        icon: COMPONENT_ICON,
        content: () => import('./0003')
      },
      {
        value: '0004',
        label: 'Segment',
        icon: COMPONENT_ICON,
        content: () => import('./0004')
      }
    ]
  }
]

export default function Index(props: PageProps) {
  return (
    <PageDoc 
      {...props}
      language="zh"
      version={pkg.version}
      collections={COLLECTIONS}
      name={pkg.name}
      description={pkg.description}
    />
  )
}
