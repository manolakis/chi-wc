import { html, css, styleMap } from '@lion/core';
import { addGlobalStyles } from '../../helpers/addGlobalStyles.js';
import { getContrast, convertToRGB } from '../../helpers/colors.js';
import { tableStyle } from '../../style/table.js';
import {
  tokenBorderRadiusBase,
  tokenBorderRadiusCircle,
  tokenBorderRadiusSharp,
  tokenColorBackgroundBase,
  tokenColorTextBackgroundBase,
  tokenColorBackgroundBaseDark,
  tokenColorBackgroundBaseDarker,
  tokenColorBackgroundBaseDarkest,
  tokenColorBackgroundBlack,
  tokenColorBackgroundDanger,
  tokenColorBackgroundDangerLight,
  tokenColorBackgroundDangerLighter,
  tokenColorBackgroundInfo,
  tokenColorBackgroundInfoLight,
  tokenColorBackgroundInfoLighter,
  tokenColorBackgroundMuted,
  tokenColorBackgroundMutedLight,
  tokenColorBackgroundMutedLighter,
  tokenColorBackgroundPrimary,
  tokenColorBackgroundPrimaryLight,
  tokenColorBackgroundSecondary,
  tokenColorBackgroundSecondaryDark,
  tokenColorBackgroundSecondaryLight,
  tokenColorBackgroundSuccess,
  tokenColorBackgroundSuccessLight,
  tokenColorBackgroundSuccessLighter,
  tokenColorBackgroundWarning,
  tokenColorBackgroundWarningLight,
  tokenColorBackgroundWarningLighter,
  tokenColorBackgroundWhite,
  tokenColorBorderBase,
  tokenColorBorderBaseDark,
  tokenColorBorderBaseLight,
  tokenColorBorderBlack,
  tokenColorBorderDanger,
  tokenColorBorderDangerLight,
  tokenColorBorderInfo,
  tokenColorBorderInfoLight,
  tokenColorBorderMuted,
  tokenColorBorderMutedLight,
  tokenColorBorderPrimary,
  tokenColorBorderSecondary,
  tokenColorBorderSecondaryDark,
  tokenColorBorderSuccess,
  tokenColorBorderSuccessLight,
  tokenColorBorderWarning,
  tokenColorBorderWarningLight,
  tokenColorBorderWhite,
  tokenColorIconBase,
  tokenColorIconDanger,
  tokenColorIconInfo,
  tokenColorIconMuted,
  tokenColorIconMutedDark,
  tokenColorIconMutedLight,
  tokenColorIconPrimary,
  tokenColorIconSecondary,
  tokenColorIconSecondaryDark,
  tokenColorIconSuccess,
  tokenColorIconWarning,
  tokenColorIconWhite,
  tokenColorTextBase,
  tokenColorTextDanger,
  tokenColorTextInfo,
  tokenColorTextMuted,
  tokenColorTextMutedLight,
  tokenColorTextPrimary,
  tokenColorTextPrimaryAlt,
  tokenColorTextSecondary,
  tokenColorTextSecondaryDark,
  tokenColorTextSuccess,
  tokenColorTextWarning,
  tokenColorTextWhite,
  tokenFontFamilyBase,
  tokenFontFamilyMono,
  tokenFontSize1,
  tokenFontSize10,
  tokenFontSize11,
  tokenFontSize12,
  tokenFontSize13,
  tokenFontSize14,
  tokenFontSize15,
  tokenFontSize16,
  tokenFontSize17,
  tokenFontSize18,
  tokenFontSize19,
  tokenFontSize2,
  tokenFontSize20,
  tokenFontSize2XS,
  tokenFontSize3,
  tokenFontSize4,
  tokenFontSize5,
  tokenFontSize6,
  tokenFontSize7,
  tokenFontSize8,
  tokenFontSize9,
  tokenFontSizeBase,
  tokenFontSizeH1,
  tokenFontSizeH2,
  tokenFontSizeH3,
  tokenFontSizeH4,
  tokenFontSizeH5,
  tokenFontSizeH6,
  tokenFontSizeLG,
  tokenFontSizeMD,
  tokenFontSizeSM,
  tokenFontSizeXL,
  tokenFontSizeXS,
  tokenFontWeightBold,
  tokenFontWeightExtraBold,
  tokenFontWeightLight,
  tokenFontWeightNormal,
  tokenFontWeightSemiBold,
  tokenOpacity0,
  tokenOpacity100,
  tokenOpacity30,
  tokenOpacity50,
  tokenOpacity70,
  tokenZIndex0,
  tokenZIndex10,
  tokenZIndex20,
  tokenZIndex30,
  tokenZIndex40,
  tokenZIndex50,
  tokenZIndex60,
  tokenZIndex70,
  tokenZIndex80,
  tokenZIndex90,
  tokenColorTextBackgroundPrimary,
  tokenColorBackgroundPrimaryDark,
  tokenColorBackgroundPrimaryDarker,
  tokenColorBackgroundPrimaryDarkest,
} from '../tokens.js';

addGlobalStyles(tableStyle);
addGlobalStyles(css`
  code {
    font-size: ${tokenFontSizeBase};
    font-family: ${tokenFontFamilyMono};
  }
`);

const regexp = /var\((?<name>[\w-]*)(,\s?(?<value>.*))?\)/;

const resolveCSSVariable = (variable, varName) => {
  const { name, value } = variable.match(regexp).groups;

  if (value.startsWith('var')) {
    // eslint-disable-next-line no-unused-vars
    return resolveCSSVariable(value, varName || name);
  }

  return { name: varName || name, value };
};

const getColorDefinitions = data =>
  data
    .map(item => (item.cssText ? { token: item } : item))
    .map(({ token, back }) => {
      const { name, value: color } = resolveCSSVariable(token.cssText);
      const { value: backgroundColor } = resolveCSSVariable(
        (back || tokenColorBackgroundBase).cssText,
      );

      return {
        token,
        name,
        color,
        backgroundColor,
      };
    });

const renderTable = (columns, data) => html`
  <table
    class="chi-table -xs"
    style="${styleMap({
      fontFamily: tokenFontFamilyBase,
    })}"
  >
    <thead>
      <tr>
        ${columns.map(({ name }) => html`<th>${name}</th>`)}
      </tr>
    </thead>
    <tbody>
      ${data.map(
        item => html`
          <tr>
            ${columns.map(({ width, func }) => html` <td width="${width}">${func(item)}</td> `)}
          </tr>
        `,
      )}
    </tbody>
  </table>
`;

export const renderColorText = () =>
  renderTable(
    [
      { name: 'Token', width: '35%', func: ({ name }) => html`<code>${name}</code>` },
      { name: 'Value', width: '25%', func: ({ color }) => color },
      {
        name: 'Example',
        width: '20%',
        func: ({ token, backgroundColor }) => html`
          <span
            style="${styleMap({
              color: token,
              backgroundColor,
              padding: '2px',
              borderRadius: tokenBorderRadiusBase,
            })}"
            >Aa</span
          >
        `,
      },
      {
        name: 'Contrast',
        width: '20%',
        func: ({ color, backgroundColor }) =>
          `${
            Math.round(getContrast(convertToRGB(backgroundColor), convertToRGB(color)) * 10) / 10
          } : 1`,
      },
    ],
    getColorDefinitions([
      tokenColorTextBase,
      { token: tokenColorTextBackgroundBase, back: tokenColorBackgroundBase },
      tokenColorTextPrimary,
      { token: tokenColorTextBackgroundPrimary, back: tokenColorBackgroundPrimary },
      tokenColorTextPrimaryAlt,
      { token: tokenColorTextSecondary, back: tokenColorBackgroundBlack },
      tokenColorTextSecondaryDark,
      tokenColorTextSuccess,
      tokenColorTextWarning,
      tokenColorTextDanger,
      tokenColorTextInfo,
      tokenColorTextMutedLight,
      tokenColorTextMuted,
      { token: tokenColorTextWhite, back: tokenColorBackgroundBlack },
    ]),
  );

export const renderColorIcon = () =>
  renderTable(
    [
      { name: 'Token', width: '35%', func: ({ name }) => html`<code>${name}</code>` },
      { name: 'Value', width: '25%', func: ({ color }) => color },
      {
        name: 'Example',
        width: '20%',
        func: ({ token, backgroundColor }) => html`
          <div
            style="${styleMap({
              display: 'inline-block',
              backgroundColor,
              padding: '2px',
              borderRadius: tokenBorderRadiusBase,
            })}"
          >
            <div
              style="${styleMap({
                backgroundColor: token,
                borderRadius: tokenBorderRadiusCircle,
                width: '16px',
                height: '16px',
              })}"
            ></div>
          </div>
        `,
      },
      {
        name: 'Contrast',
        width: '20%',
        func: ({ color, backgroundColor }) =>
          `${
            Math.round(getContrast(convertToRGB(backgroundColor), convertToRGB(color)) * 10) / 10
          } : 1`,
      },
    ],
    getColorDefinitions([
      tokenColorIconBase,
      tokenColorIconPrimary,
      { token: tokenColorIconSecondary, back: tokenColorBackgroundBlack },
      tokenColorIconSecondaryDark,
      tokenColorIconSuccess,
      tokenColorIconWarning,
      tokenColorIconDanger,
      tokenColorIconInfo,
      tokenColorIconMutedLight,
      tokenColorIconMuted,
      tokenColorIconMutedDark,
      { token: tokenColorIconWhite, back: tokenColorBackgroundBlack },
    ]),
  );

export const renderColorBackground = () =>
  renderTable(
    [
      { name: 'Token', width: '35%', func: ({ name }) => html`<code>${name}</code>` },
      { name: 'Value', width: '25%', func: ({ color }) => color },
      {
        name: 'Example',
        width: '20%',
        func: ({ token, backgroundColor }) => html`
          <span
            style="${styleMap({
              color: backgroundColor,
              backgroundColor: token,
              padding: '2px',
              borderRadius: tokenBorderRadiusBase,
            })}"
            >Aa</span
          >
        `,
      },
      {
        name: 'Contrast',
        width: '20%',
        func: ({ color, backgroundColor }) =>
          `${
            Math.round(getContrast(convertToRGB(backgroundColor), convertToRGB(color)) * 10) / 10
          } : 1`,
      },
    ],
    getColorDefinitions([
      { token: tokenColorBackgroundBase, back: tokenColorTextBackgroundBase },
      { token: tokenColorBackgroundBaseDark, back: tokenColorTextBackgroundBase },
      { token: tokenColorBackgroundBaseDarker, back: tokenColorTextBackgroundBase },
      { token: tokenColorBackgroundBaseDarkest, back: tokenColorTextBackgroundBase },
      { token: tokenColorBackgroundPrimaryLight, back: tokenColorTextBackgroundBase },
      { token: tokenColorBackgroundPrimary, back: tokenColorTextBackgroundPrimary },
      { token: tokenColorBackgroundPrimaryDark, back: tokenColorTextBackgroundPrimary },
      { token: tokenColorBackgroundPrimaryDarker, back: tokenColorTextBackgroundPrimary },
      { token: tokenColorBackgroundPrimaryDarkest, back: tokenColorTextBackgroundPrimary },
      { token: tokenColorBackgroundSecondaryLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundSecondary, back: tokenColorTextBase },
      { token: tokenColorBackgroundSecondaryDark, back: tokenColorTextBase },
      { token: tokenColorBackgroundSuccessLighter, back: tokenColorTextBase },
      { token: tokenColorBackgroundSuccessLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundSuccess, back: tokenColorTextWhite },
      { token: tokenColorBackgroundWarningLighter, back: tokenColorTextBase },
      { token: tokenColorBackgroundWarningLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundWarning, back: tokenColorTextWhite },
      { token: tokenColorBackgroundDangerLighter, back: tokenColorTextBase },
      { token: tokenColorBackgroundDangerLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundDanger, back: tokenColorTextWhite },
      { token: tokenColorBackgroundInfoLighter, back: tokenColorTextBase },
      { token: tokenColorBackgroundInfoLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundInfo, back: tokenColorTextWhite },
      { token: tokenColorBackgroundMutedLighter, back: tokenColorTextBase },
      { token: tokenColorBackgroundMutedLight, back: tokenColorTextBase },
      { token: tokenColorBackgroundMuted, back: tokenColorTextWhite },
      { token: tokenColorBackgroundBlack, back: tokenColorTextWhite },
      { token: tokenColorBackgroundWhite, back: tokenColorTextBase },
    ]),
  );

export const renderColorBorder = () =>
  renderTable(
    [
      { name: 'Token', width: '35%', func: ({ name }) => html`<code>${name}</code>` },
      { name: 'Value', width: '25%', func: ({ color }) => color },
      {
        name: 'Example',
        width: '40%',
        func: ({ token, backgroundColor }) => html`
          <span
            style="${styleMap({
              color: backgroundColor,
              padding: '2px',
              borderRadius: tokenBorderRadiusBase,
              border: `1px solid ${token}`,
            })}"
            >Aa</span
          >
        `,
      },
    ],
    getColorDefinitions([
      { token: tokenColorBorderBaseLight, back: tokenColorTextBase },
      { token: tokenColorBorderBase, back: tokenColorTextBase },
      { token: tokenColorBorderBaseDark, back: tokenColorTextBase },
      { token: tokenColorBorderPrimary, back: tokenColorTextBase },
      { token: tokenColorBorderSecondary, back: tokenColorTextBase },
      { token: tokenColorBorderSecondaryDark, back: tokenColorTextBase },
      { token: tokenColorBorderSuccessLight, back: tokenColorTextBase },
      { token: tokenColorBorderSuccess, back: tokenColorTextBase },
      { token: tokenColorBorderWarningLight, back: tokenColorTextBase },
      { token: tokenColorBorderWarning, back: tokenColorTextBase },
      { token: tokenColorBorderDangerLight, back: tokenColorTextBase },
      { token: tokenColorBorderDanger, back: tokenColorTextBase },
      { token: tokenColorBorderInfoLight, back: tokenColorTextBase },
      { token: tokenColorBorderInfo, back: tokenColorTextBase },
      { token: tokenColorBorderMutedLight, back: tokenColorTextBase },
      { token: tokenColorBorderMuted, back: tokenColorTextBase },
      { token: tokenColorBorderBlack, back: tokenColorTextBase },
      { token: tokenColorBorderWhite, back: tokenColorTextBase },
    ]),
  );

export const renderFontFamily = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '45%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '20%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<span style="font-family:${value}">Aa</span>`;
        },
      },
    ],
    [tokenFontFamilyBase, tokenFontFamilyMono],
  );

export const renderFontWeight = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<span style="font-weight:${value}">Aa</span>`;
        },
      },
    ],
    [
      tokenFontWeightLight,
      tokenFontWeightNormal,
      tokenFontWeightSemiBold,
      tokenFontWeightBold,
      tokenFontWeightExtraBold,
    ],
  );

export const renderFontSizeText = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<span style="font-size:${value}">Aa</span>`;
        },
      },
    ],
    [
      tokenFontSizeBase,
      tokenFontSize2XS,
      tokenFontSizeXS,
      tokenFontSizeSM,
      tokenFontSizeMD,
      tokenFontSizeLG,
      tokenFontSizeXL,
    ],
  );

export const renderFontSizeHeadings = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<span style="font-size:${value}">Aa</span>`;
        },
      },
    ],
    [
      tokenFontSizeH6,
      tokenFontSizeH5,
      tokenFontSizeH4,
      tokenFontSizeH3,
      tokenFontSizeH2,
      tokenFontSizeH1,
    ],
  );

export const renderFontSizeSystem = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<span style="font-size:${value}">Aa</span>`;
        },
      },
    ],
    [
      tokenFontSize1,
      tokenFontSize2,
      tokenFontSize3,
      tokenFontSize4,
      tokenFontSize5,
      tokenFontSize6,
      tokenFontSize7,
      tokenFontSize8,
      tokenFontSize9,
      tokenFontSize10,
      tokenFontSize11,
      tokenFontSize12,
      tokenFontSize13,
      tokenFontSize14,
      tokenFontSize15,
      tokenFontSize16,
      tokenFontSize17,
      tokenFontSize18,
      tokenFontSize19,
      tokenFontSize20,
    ],
  );

export const renderBorderRadius = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<div
            style="${styleMap({
              display: 'inline-block',
              width: '16px',
              height: '16px',
              borderRadius: value,
              backgroundColor: tokenColorBackgroundBlack,
            })}"
          ></div>`;
        },
      },
    ],
    [tokenBorderRadiusBase, tokenBorderRadiusSharp, tokenBorderRadiusCircle],
  );

export const renderOpacity = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '25%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
      {
        name: 'Example',
        width: '40%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return html`<div
            style="${styleMap({
              backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0',
              backgroundSize: '12px 12px',
              overflow: 'hidden',
              position: 'relative',
              height: '3rem',
              borderRadius: tokenBorderRadiusBase,
              backgroundImage: `
                linear-gradient(45deg, rgba(36, 37, 38, .1) 25%, transparent 0),
                linear-gradient(-45deg, rgba(36, 37, 38, .1) 25%, transparent 0),
                linear-gradient(45deg, transparent 75%, rgba(36, 37, 38, .1) 0),
                linear-gradient(-45deg, transparent 75%, rgba(36, 37, 38, .1) 0)`,
            })}"
          >
            <div
              style="${styleMap({
                opacity: value,
                height: '100%',
                with: '100%',
                backgroundColor: tokenColorBackgroundBlack,
              })}"
            ></div>
          </div>`;
        },
      },
    ],
    [tokenOpacity0, tokenOpacity30, tokenOpacity50, tokenOpacity70, tokenOpacity100],
  );

export const renderZIndex = () =>
  renderTable(
    [
      {
        name: 'Token',
        width: '35%',
        func: token => {
          const { name } = resolveCSSVariable(token.cssText);

          return html`<code>${name}</code>`;
        },
      },
      {
        name: 'Value',
        width: '65%',
        func: token => {
          const { value } = resolveCSSVariable(token.cssText);

          return value;
        },
      },
    ],
    [
      tokenZIndex0,
      tokenZIndex10,
      tokenZIndex20,
      tokenZIndex30,
      tokenZIndex40,
      tokenZIndex50,
      tokenZIndex60,
      tokenZIndex70,
      tokenZIndex80,
      tokenZIndex90,
    ],
  );
