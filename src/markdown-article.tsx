import React, { useMemo } from 'react'
import classNames from 'classnames'
import { MarkdownConfig, MarkdownArticleProps } from './types'
import { MarkdownConfigContext } from './tools'
import styles from './index.module.scss'

export default function MarkdownArticle({ dark, darkCode, className, children, ...props }: MarkdownArticleProps) {
  const config: MarkdownConfig = useMemo(() => ({ dark, darkCode }), [dark, darkCode])
  return (
    <MarkdownConfigContext.Provider value={config}>
      <article className={classNames(styles.markdown, styles.airticle, dark && styles.dark, className)} {...props}>
        {children}
      </article>
    </MarkdownConfigContext.Provider>
  )
}
