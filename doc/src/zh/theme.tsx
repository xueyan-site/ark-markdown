import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
## 标题

# 这是标题一
## 这是标题二
### 这是标题三
#### 这是标题四
##### 这是标题五
###### 这是标题六

## 排版

**粗体** *斜体* 

~~这是一段错误的文本。~~

引用:

> 引用...

有充列表:
1. 支持...
2. 支持...

---

无序列表:

- 项目1
- 项目2

## 素材

图片: ![favicon](${XT_PATH}favicon.png)

链接: [这是链接](./)

## 代码

示例:

    function get(key) {
        return m[key];
    }

代码 \`高亮\` 示例:

\`\`\` javascript
/**
 * nth element in the fibonacci series.
 * @param n >= 0
 * @return the nth element, >= 0.
 */
function fib(n) {
  var a = 1, b = 1;
  var tmp;
  while (--n >= 0) {
    tmp = a;
    a += b;
    b = tmp;
  }
  return a;
}
 
document.write(fib(10));
console.log('this is a long long long long long long long long long long long code.)
\`\`\`

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
:   这是代码块的定义
 
        代码块
 
## 标签

<table>
    <tr>
        <th rowspan="2">xx</th>
        <th>foo</th>
        <th>bar</th>
        <th>baz</th>
    </tr>
    <tr>
        <td>foo</td>
        <td>bar</td>
        <td>baz</td>
    </tr>
</table>

<img src="${XT_PATH}favicon.png" width="50px" />
`

export default function Main() {
  return (
    <Article>
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '16px', minWidth: '300px' }}>
          <Segment>{'# 亮色主题（默认）\n'+MARK1}</Segment>
        </div>
        <div style={{ flex: 1, backgroundColor: '#000', padding: '16px', minWidth: '300px' }}>
          <Segment dark={true} darkCode={true}>{'# 暗色主题\n'+MARK1}</Segment>
        </div>
      </div>
    </Article>
  )
}