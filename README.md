## Installation

Using npm:
```shell
$ npm i simple-react-drag-component -S
```

## Usage

```js

import dragWrap from 'simple-react-drag-component';

// 参数为一个需要拖动功能的Component
const DragItem = dragWrap(CustomReactComponent);

```

```html

<!-- 可以传递三个函数，分别在开始拖动、拖动过程中、拖动结束时调用。(三个函数第一个参数都是当前组件对应的props，拖动中函数增加一个参数，类型object，记录当前组建的left和top) -->
<DragItem dragStart={dragStartCallBack} dragging={draggingCallBack} dragEnd={dragEndCallback} />

```