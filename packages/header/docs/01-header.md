# Header

```js script
import { renderHeader, renderHeaderExtra } from './01-headerDemo.js';
export default {
  title: 'Navigation/Header',
};
```

Headers are used to render consistent branded headers.

## Logo

```js story
export const header = () => renderHeader();
```

## Content extra

```js story
export const contentExtra = () => renderHeaderExtra();
```
