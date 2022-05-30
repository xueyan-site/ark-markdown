import React from 'react'

export interface TopicProps {
  className?: string
  style?: React.CSSProperties
}

export function Topic({ className, style }: TopicProps) {
  return (
    <div className={className} style={style}>
      https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
    </div>
  )
}
