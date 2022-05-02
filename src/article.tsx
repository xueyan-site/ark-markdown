import React from 'react'
import cn from 'classnames'
import styles from './style.scss'

export interface ArticleProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function Article({ className, style, children }: ArticleProps) {
  return (
    <article className={cn(styles.xrmarkdown, className)} style={style}>
      {children}
    </article>
  )
}
