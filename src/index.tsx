/**
 * @package xueyan-react-markdown
 * @author xueyan <yang@xueyan.site>
 * @description package entry
 */

export { default as MarkdownAirticle } from './markdown-article'

export { default as MarkdownSegment } from './markdown-segment'

export { default as markdownStyles } from './index.module.scss'

export {
  useMarkdownConfig,
  MarkdownConfigContext
} from './tools'

export {
  MarkdownConfig,
  MarkdownArticleProps,
  MarkdownSegmentProps
} from './types'
