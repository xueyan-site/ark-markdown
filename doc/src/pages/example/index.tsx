import React from 'react'
import { MarkdownAirticle, MarkdownSegment } from 'xueyan-react-markdown'
import test from './test.md'

export default function Example() {
  return (
    <MarkdownAirticle dark={true}>
      <MarkdownSegment>{test}</MarkdownSegment>
    </MarkdownAirticle>
  )
}
