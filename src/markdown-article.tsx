import React from 'react'
import classNames from 'classnames'
import { MarkdownArticleProps } from './types'
import { MarkdownConfigProvider } from './stores'
import styles from './index.module.scss'

export default function MarkdownArticle({ dark, darkCode, className, children, ...props }: MarkdownArticleProps) {
  return (
    <MarkdownConfigProvider dark={dark} darkCode={darkCode}>
      <article className={classNames(styles.markdown, styles.airticle, dark && styles.dark, className)} {...props}>
        {children}
      </article>
    </MarkdownConfigProvider>
  )
}
