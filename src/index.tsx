/**
 * @package xueyan-react-markdown
 * @author xueyan <yang@xueyan.site>
 * @description 包入口 package entry
 */

export { default as Article } from './article'

export { default as Segment } from './segment'

export { default as styles } from './index.scss'

export {
  useMarkdownConfig,
  useMarkdownConfigStore
} from './stores'

export type {
  MarkdownConfig,
  ArticleProps,
  SegmentProps
} from './types'
