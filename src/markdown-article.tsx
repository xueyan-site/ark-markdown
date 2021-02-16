import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Store from 'xueyan-react-store'
import { MarkdownConfig, MarkdownArticleProps } from './types'
import { MarkdownConfigProvider } from './stores'
import styles from './index.module.scss'

export default function MarkdownArticle({ dark, darkCode, className, children, ...props }: MarkdownArticleProps) {
  const storeRef = useRef<Store<MarkdownConfig>>(null)
  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.setPartData({ dark, darkCode })
    }
  }, [dark, darkCode])
  return (
    <MarkdownConfigProvider ref={storeRef} dark={dark} darkCode={darkCode}>
      <article className={classNames(styles.markdown, styles.airticle, dark && styles.dark, className)} {...props}>
        {children}
      </article>
    </MarkdownConfigProvider>
  )
}
