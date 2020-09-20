import { css } from '@lion/core';
import { boxSizingGenerator } from '../style/generators/box-sizing.js';
import {
  desktopSmallGenerator,
  tabletPortraitGenerator,
} from '../style/generators/media-queries.js';
import { rem } from '../style/values/spacing.js';
import {
  tokenColorBackgroundBase,
  tokenColorTextBase,
  tokenFontSize5,
  tokenFontWeightNormal,
} from '../foundations/tokens.js';

// language=CSS
export const headerStyle = css`
  ${boxSizingGenerator(':host', '*')}

  .header {
    min-height: ${rem[56]};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${tokenColorBackgroundBase};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 2px 2px 0 rgba(0, 0, 0, 0.12);
  }

  .header__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 ${rem[8]};
    height: ${rem[56]};
    width: 100%;
  }
  .header__brand {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  slot[name='header-brand-logo'] {
    display: block;
    margin: 0 ${rem[8]};
  }
  .header__brand__logo {
    height: ${rem[32]};
    width: ${rem[32]};
  }
  .header__brand__title {
    display: none;
    color: ${tokenColorTextBase};
    font-weight: ${tokenFontWeightNormal};
    font-size: ${tokenFontSize5};
  }

  ${tabletPortraitGenerator(css`
    .header__content {
      padding: 0 ${rem[16]};
    }
    .header__brand__title {
      display: block;
    }
  `)}

  ${desktopSmallGenerator(css`
    .header__content {
      padding: 0 ${rem[24]};
      justify-content: initial;
    }
    slot[name='header-brand-logo'] {
      margin: 0;
      margin-right: ${rem[48]};
    }
  `)}
`;
