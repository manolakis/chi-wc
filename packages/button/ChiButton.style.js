import { css } from '@lion/core';
import { boxSizingGenerator } from '../style/generators/box-sizing.js';
import {
  tokenBorderRadiusBase,
  tokenColorBackgroundBase,
  tokenColorBackgroundBaseDarker,
  tokenColorBackgroundBaseDarkest,
  tokenColorBackgroundPrimary,
  tokenColorBackgroundPrimaryDarker,
  tokenColorBackgroundPrimaryDarkest,
  tokenColorBorderBase,
  tokenColorBorderBaseDark,
  tokenColorBorderSecondaryDark,
  tokenColorTextBackgroundPrimary,
  tokenColorTextBase,
  tokenFontSizeBase,
  tokenFontWeightSemiBold,
} from '../foundations/tokens.js';
import { rem1, rem15, rem7, rem16, rem2 } from '../style/values/spacing.js';

// language=CSS
export const buttonStyle = css`
  ${boxSizingGenerator(':host')}

  :host {
    min-height: initial;
  }

  .btn {
    font-size: ${tokenFontSizeBase};
    font-weight: ${tokenFontWeightSemiBold};
    border-radius: ${tokenBorderRadiusBase};
    color: ${tokenColorTextBase};
    background-color: ${tokenColorBackgroundBase};
    cursor: pointer;
    padding: ${rem7} ${rem15};
    border: ${rem1} solid ${tokenColorBorderBase};
    line-height: ${rem16};
    min-height: initial;
    transition: background-color 0.12s ease-in, border-color 0.1s ease-in, color 0.12s ease-in;
  }

  :host(:hover) .btn {
    background-color: ${tokenColorBackgroundBaseDarker};
  }

  :host(:active) .btn,
  :host([active]) .btn {
    background-color: ${tokenColorBackgroundBaseDarkest};
    border-color: ${tokenColorBorderBaseDark};
  }

  :host(:focus:not([disabled])) .btn {
    outline-offset: ${rem1};
    outline: ${rem2} solid ${tokenColorBorderSecondaryDark};
  }

  :host(:active:focus) .btn {
    outline: none;
  }

  :host([color='primary']) .btn {
    background-color: ${tokenColorBackgroundPrimary};
    color: ${tokenColorTextBackgroundPrimary};
    border-color: transparent;
  }
  :host([color='primary']:hover) .btn {
    background-color: ${tokenColorBackgroundPrimaryDarker};
  }
  :host([color='primary']:active) .btn,
  :host([color='primary'][active]) .btn {
    background-color: ${tokenColorBackgroundPrimaryDarkest};
  }
`;
