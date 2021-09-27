import { ReactMarkdownProps } from 'react-markdown'

export interface MarkdownConfig {
  /**
   * open dark mode
   */
  dark?: boolean
  /**
   * open dark mode for code
   */
  darkCode?: boolean
}

export type SegmentProps = ReactMarkdownProps & {
  /**
   * open dark mode
   */
  dark?: boolean
  /**
   * open dark mode for code
   */
  darkCode?: boolean
}

export interface ArticleProps extends MarkdownConfig {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
