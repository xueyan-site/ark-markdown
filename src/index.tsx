/**
 * @package xueyan-react-markdown
 * @author xueyan <yang@xueyan.site>
 * @description 包入口 package entry
 */

export { default as MarkdownAirticle } from './markdown-article'

export { default as MarkdownSegment } from './markdown-segment'

export { default as markdownStyles } from './index.module.scss'

export {
  useMarkdownConfig,
  useMarkdownConfigStore
} from './stores'

export {
  MarkdownConfig,
  MarkdownArticleProps,
  MarkdownSegmentProps
} from './types'
