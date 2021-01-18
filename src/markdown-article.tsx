import React, { useMemo } from 'react'
import classNames from 'classnames'
import { MarkdownConfig, MarkdownArticleProps, Config } from './common'
import styles from './index.module.scss'

export default function MarkdownArticle({ dark, darkCode, className, children, ...props }: MarkdownArticleProps) {
  const config: MarkdownConfig = useMemo(() => ({ dark, darkCode }), [dark, darkCode])
  return (
    <Config.Provider value={config}>
      <article className={classNames(styles.markdown, dark && styles.dark, className)} {...props}>
        {children}
      </article>
    </Config.Provider>
  )
}
