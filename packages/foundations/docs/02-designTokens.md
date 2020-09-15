# Design tokens

```js script
import {
  renderColorText,
  renderColorIcon,
  renderColorBackground,
  renderColorBorder,
  renderFontFamily,
  renderFontWeight,
  renderFontSizeText,
  renderFontSizeHeadings,
  renderFontSizeSystem,
  renderBorderRadius,
  renderOpacity,
  renderZIndex,
} from './02-designTokensDemo.js';
export default {
  title: 'Foundations/Design tokens',
};
```

Design tokens are used in place of hard-coded values to maintain consistent and scalable design system development.

## Color

### Text colors

```js story
export const colorText = () => renderColorText();
```

### Icon colors

```js story
export const colorIcon = () => renderColorIcon();
```

### Background colors

```js story
export const colorBackground = () => renderColorBackground();
```

### Border colors

```js story
export const colorBorder = () => renderColorBorder();
```

## Font

### Font family

```js story
export const fontFamily = () => renderFontFamily();
```

### Font weight

```js story
export const fontWeight = () => renderFontWeight();
```

### Font size

#### Text font size

```js story
export const fontSizeText = () => renderFontSizeText();
```

#### Headings font size

```js story
export const fontSizeHeadings = () => renderFontSizeHeadings();
```

#### System font size

```js story
export const fontSizeSystem = () => renderFontSizeSystem();
```

## Border radius

```js story
export const borderRadius = () => renderBorderRadius();
```

## Opacity

```js story
export const opacity = () => renderOpacity();
```

## Z-Index

```js story
export const zIndex = () => renderZIndex();
```
