import { css } from '@lion/core';
import { boxSizingGenerator } from '../style/generators/box-sizing.js';
import {
  tokenColorBorderBase,
  tokenColorBorderBaseDarker,
  tokenColorBorderDanger,
  tokenColorBorderSecondaryDark,
  tokenColorTextBase,
  tokenColorTextDanger,
  tokenColorTextMutedLighter,
  tokenFontSize4,
  tokenFontSizeBase,
  tokenFontWeightNormal,
  tokenFontWeightSemiBold,
} from '../foundations/tokens.js';
import { rem } from '../style/values/spacing.js';
import { fontFamilyMixin } from '../style/typography.js';

// language=CSS
export const inputStyle = css`
  ${boxSizingGenerator(':host')}

  .form-field__label ::slotted(*) {
    display: block;
    color: ${tokenColorTextBase};
    font-size: ${tokenFontSizeBase};
    font-weight: ${tokenFontWeightSemiBold};
    line-height: ${rem[20]};
    margin-bottom: ${rem[4]};
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    box-sizing: border-box;
    color: ${tokenColorTextBase};
    font-size: ${tokenFontSizeBase};
    height: ${rem[32]};
    line-height: ${rem[16]};
    padding: ${rem[7]} ${rem[12]};
    transition: all 0.15s ease-in-out;
    border: ${rem[1]} solid ${tokenColorBorderBase};
    outline: none;
    ${fontFamilyMixin()};
  }

  .input-group__container > .input-group__input ::slotted(.form-control:hover) {
    border-color: ${tokenColorBorderBaseDarker};
  }

  .input-group__container > .input-group__input ::slotted(.form-control:focus) {
    border-color: ${tokenColorBorderSecondaryDark};
    box-shadow: 0 0 0 ${rem[1]} ${tokenColorBorderSecondaryDark};
  }

  .input-group__container > .input-group__input ::slotted(.form-control::placeholder) {
    color: ${tokenColorTextMutedLighter};
  }

  :host([shows-feedback-for='error'])
    .input-group__container
    > .input-group__input
    ::slotted(.form-control) {
    border-color: ${tokenColorBorderDanger};
  }

  :host([shows-feedback-for='error'])
    .input-group__container
    > .input-group__input
    ::slotted(.form-control:focus) {
    border-color: ${tokenColorBorderDanger};
    box-shadow: 0 0 0 ${rem[1]} ${tokenColorBorderDanger};
  }

  .form-field__feedback ::slotted([type='error']) {
    color: ${tokenColorTextDanger};
    line-height: ${rem[20]};
    font-size: ${tokenFontSize4};
    font-weight: ${tokenFontWeightNormal};
    margin: ${rem[4]} 0;
    ${fontFamilyMixin()};
  }
`;
