import { ReactMarkdownProps } from 'react-markdown'

export interface MarkdownConfig {
  /**
   * 是否开启暗黑模式
   */
  dark?: boolean
  /**
   * 是否开启暗黑模式（仅针对代码模块）
   */
  darkCode?: boolean
}

export type MarkdownSegmentProps = ReactMarkdownProps & {
  /**
   * 是否开启暗黑模式
   */
  dark?: boolean
  /**
   * 是否开启暗黑模式（仅针对代码模块）
   */
  darkCode?: boolean
}

export interface MarkdownArticleProps extends MarkdownConfig {
  /**
   * 类名
   */
  className?: string
  /**
   * 样式
   */
  style?: React.CSSProperties
  /**
   * 内容
   */
  children?: React.ReactNode
}
