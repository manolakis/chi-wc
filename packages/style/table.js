import { css } from '@lion/core';
import {
  tokenFontSizeBase,
  tokenFontWeightSemiBold,
  tokenColorBorderBaseLight,
  tokenColorBorderBaseDark,
} from '../foundations/tokens.js';

// language=CSS
export const tableStyle = css`
  table {
    box-sizing: border-box;
    border-spacing: 0;
    font-size: ${tokenFontSizeBase};
    margin: 0;
    padding: 0;
    width: 100%;
  }
  thead {
    box-sizing: border-box;
  }
  th {
    font-weight: ${tokenFontWeightSemiBold};
    text-align: left;
  }
  td,
  th {
    padding: 1rem;
  }
  th {
    border-bottom: 0.0625rem solid ${tokenColorBorderBaseDark};
  }
  td {
    border-bottom: 0.0625rem solid ${tokenColorBorderBaseLight};
  }
  .-xs td,
  .-xs th {
    padding: 0.5rem;
  }
`;
