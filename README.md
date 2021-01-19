# xueyan-react-markdown

xueyan-react-markdown is a react markdown component.

The project created by xueyan <yang@xueyan.site>.

## Install

- NPM: `npm i xueyan-react-markdown`  
- YARN: `yarn add xueyan-react-markdown`  

## Usage

```ts
import React from 'react'
import { MarkdownAirticle, MarkdownSegment } from 'xueyan-react-markdown'

const content = `
# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

___

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'
`

export default function Example() {
  return (
    <MarkdownAirticle dark={true}>
      <MarkdownSegment>{test}</MarkdownSegment>
    </MarkdownAirticle>
  )
}
```
