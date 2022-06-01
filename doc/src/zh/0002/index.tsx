import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { SwitchTheme } from 'xueyan-react-style'

const MARK1 = `
# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
###### 标题六

## 排版

**粗体** *斜体* 

~~一段错误的文本。~~

引用:

> 引用

有充列表:
1. 项目1
2. 项目2

---

无序列表:

- 项目1
- 项目2
  - 子项目1
  - 子项目2
    1. 子项目1
    2. 子项目2

## 素材

图片: ![favicon](${XT_PATH}favicon.png)

链接: [链接](./)

## 代码

示例:

    function get(key) {
        return m[key];
    }

代码 \`高亮\` 默认语言是 \`tsx\`

\`\`\`
import React from 'react'

/**
 * nth element in the fibonacci series.
 * @param n >= 0
 * @return the nth element, >= 0.
 */
function fib(n: number): number {
  var a = 1, b = 1;
  var tmp;
  while (--n >= 0) {
    tmp = a;
    a += b;
    b = tmp;
  }
  return a;
}

export default function Component() {
  console.log('this is a long long long long long long long long long long long long long long long long log!')
  return (
    <div>fib(10): {fib(10)}</div>
  )
}
\`\`\`

指定代码语言是 \`python\`

\`\`\`python
class Employee:
  empCount = 0

  def __init__(self, name, salary):
    self.name = name
    self.salary = salary
    Employee.empCount += 1
\`\`\`

## 表格
 
Item     | Value
-------- | ---
Computer | \\$1600
Phone    | \\$12
Pipe     | \\$1

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | \\$1600 |  5    |
| Phone    | \\$12   |  12   |
| Pipe     | \\$1    |  234  |
 
 
## 定义型列表
 
名词 1
:   定义 1
 
代码块 2
:   代码块的定义
 
        代码块
 
## 标签

<table>
  <tbody>
    <tr>
      <td rowspan="2">xx</td>
      <td>foo</td>
      <td>bar</td>
      <td>baz</td>
    </tr>
    <tr>
      <td>foo</td>
      <td>bar</td>
      <td>baz</td>
    </tr>
  </tbody>
</table>

<img src="${XT_PATH}favicon.png" width="50px" />
`

export default function Main() {
  return (
    <Article>
      <SwitchTheme style={{ width: '240px' }} />
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
