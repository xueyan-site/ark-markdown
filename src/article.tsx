import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import Store from 'xueyan-react-store'
import { MarkdownConfig, ArticleProps } from './types'
import { MarkdownConfigProvider } from './store'
import styles from './index.scss'

export default function Article({ dark, darkCode, className, children, ...props }: ArticleProps) {
  const storeRef = useRef<Store<MarkdownConfig>>(null)
  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.set({ dark, darkCode })
    }
  }, [dark, darkCode])
  return (
    <MarkdownConfigProvider ref={storeRef} dark={dark} darkCode={darkCode}>
      <article className={cn(styles.markdown, dark && styles.dark, className)} {...props}>
        {children}
      </article>
    </MarkdownConfigProvider>
  )
}
