import { css } from '@lion/core';
import {
  colorBlack,
  colorBlue10,
  colorBlue30,
  colorBlue60,
  colorBlue70,
  colorBlue75,
  colorCyan40,
  colorCyan50,
  colorGreen30,
  colorGreen60,
  colorGreen70,
  colorGrey10,
  colorGrey15,
  colorGrey20,
  colorGrey30,
  colorGrey50,
  colorGrey60,
  colorGrey70,
  colorGrey80,
  colorGrey100,
  colorRed10,
  colorRed20,
  colorRed30,
  colorRed60,
  colorRed70,
  colorWhite,
  colorYellow60,
  colorYellow70,
  colorGrey25,
  colorBlue20,
  colorCyan15,
  colorGreen10,
  colorGreen20,
  colorYellow10,
  colorYellow20,
  colorYellow30,
  colorBlue80,
  colorBlue90,
} from '../color-system.js';

/** Text */

export const tokenColorTextWhite = css`var(--color-text-white, ${colorWhite})`;
export const tokenColorTextBase = css`var(--color-text-base, ${colorGrey100})`;
export const tokenColorTextBackgroundBase = css`var(--color-text-background-base, ${tokenColorTextBase})`;
export const tokenColorTextPrimary = css`var(--color-text-primary, ${colorBlue75})`;
export const tokenColorTextBackgroundPrimary = css`var(--color-text-background-primary, ${tokenColorTextWhite})`;
export const tokenColorTextPrimaryAlt = css`var(--color-text-primary-alt, ${colorBlue70})`;
export const tokenColorTextSecondary = css`var(--color-text-secondary, ${colorCyan40})`;
export const tokenColorTextSecondaryDark = css`var(--color-text-secondary-dark, ${colorCyan50})`;
export const tokenColorTextSuccess = css`var(--color-text-success, ${colorGreen70})`;
export const tokenColorTextWarning = css`var(--color-text-warning, ${colorYellow70})`;
export const tokenColorTextDanger = css`var(--color-text-danger, ${colorRed70})`;
export const tokenColorTextInfo = css`var(--color-text-info, ${colorBlue75})`;
export const tokenColorTextMutedLight = css`var(--color-text-muted-light, ${colorGrey60})`;
export const tokenColorTextMuted = css`var(--color-text-muted, ${colorGrey70})`;

/** Icon */

export const tokenColorIconBase = css`var(--color-icon-base, ${colorGrey80})`;
export const tokenColorIconPrimary = css`var(--color-icon-primary, ${colorBlue70})`;
export const tokenColorIconSecondary = css`var(--color-icon-secondary, ${colorCyan40})`;
export const tokenColorIconSecondaryDark = css`var(--color-icon-secondary-dark, ${colorCyan50})`;
export const tokenColorIconSuccess = css`var(--color-icon-success, ${colorGreen60})`;
export const tokenColorIconWarning = css`var(--color-icon-warning, ${colorYellow60})`;
export const tokenColorIconDanger = css`var(--color-icon-danger, ${colorRed60})`;
export const tokenColorIconInfo = css`var(--color-icon-info, ${colorBlue60})`;
export const tokenColorIconMutedLight = css`var(--color-icon-muted-light, ${colorGrey50})`;
export const tokenColorIconMuted = css`var(--color-icon-muted, ${colorGrey60})`;
export const tokenColorIconMutedDark = css`var(--color-icon-muted-dark, ${colorGrey70})`;
export const tokenColorIconWhite = css`var(--color-icon-white, ${colorWhite})`;

/** Background */

export const tokenColorBackgroundBase = css`var(--color-background-base, ${colorWhite})`;
export const tokenColorBackgroundBaseDark = css`var(--color-background-base-dark, ${colorGrey15})`;
export const tokenColorBackgroundBaseDarker = css`var(--color-background-base-darker, ${colorGrey20})`;
export const tokenColorBackgroundBaseDarkest = css`var(--color-background-base-darkest, ${colorGrey25})`;
export const tokenColorBackgroundPrimaryLight = css`var(--color-background-primary-light, ${colorBlue20})`;
export const tokenColorBackgroundPrimary = css`var(--color-background-primary, ${colorBlue70})`;
export const tokenColorBackgroundPrimaryDark = css`var(--color-background-primary-darker, ${colorBlue75})`;
export const tokenColorBackgroundPrimaryDarker = css`var(--color-background-primary-darker, ${colorBlue80})`;
export const tokenColorBackgroundPrimaryDarkest = css`var(--color-background-primary-darkest, ${colorBlue90})`;
export const tokenColorBackgroundSecondaryLight = css`var(--color-background-secondary-light, ${colorCyan15})`;
export const tokenColorBackgroundSecondary = css`var(--color-background-secondary, ${colorCyan40})`;
export const tokenColorBackgroundSecondaryDark = css`var(--color-background-secondary-dark, ${colorCyan50})`;
export const tokenColorBackgroundSuccessLighter = css`var(--color-background-success-lighter, ${colorGreen10})`;
export const tokenColorBackgroundSuccessLight = css`var(--color-background-success-light, ${colorGreen20})`;
export const tokenColorBackgroundSuccess = css`var(--color-background-success, ${colorGreen70})`;
export const tokenColorBackgroundWarningLighter = css`var(--color-background-warning-lighter, ${colorYellow10})`;
export const tokenColorBackgroundWarningLight = css`var(--color-background-warning-light, ${colorYellow20})`;
export const tokenColorBackgroundWarning = css`var(--color-background-warning, ${colorYellow70})`;
export const tokenColorBackgroundDangerLighter = css`var(--color-background-danger-lighter, ${colorRed10})`;
export const tokenColorBackgroundDangerLight = css`var(--color-background-danger-light, ${colorRed20})`;
export const tokenColorBackgroundDanger = css`var(--color-background-danger, ${colorRed70})`;
export const tokenColorBackgroundInfoLighter = css`var(--color-background-info-lighter, ${colorBlue10})`;
export const tokenColorBackgroundInfoLight = css`var(--color-background-info-light, ${colorBlue20})`;
export const tokenColorBackgroundInfo = css`var(--color-background-info, ${colorBlue70})`;
export const tokenColorBackgroundMutedLighter = css`var(--color-background-muted-lighter, ${colorGrey10})`;
export const tokenColorBackgroundMutedLight = css`var(--color-background-muted-light, ${colorGrey20})`;
export const tokenColorBackgroundMuted = css`var(--color-background-muted, ${colorGrey70})`;
export const tokenColorBackgroundBlack = css`var(--color-background-black, ${colorBlack})`;
export const tokenColorBackgroundWhite = css`var(--color-background-white, ${colorWhite})`;

/** Border */

export const tokenColorBorderBaseLight = css`var(--color-border-base-light, ${colorGrey20})`;
export const tokenColorBorderBase = css`var(--color-border-base, ${colorGrey25})`;
export const tokenColorBorderBaseDark = css`var(--color-border-base-dark, ${colorGrey30})`;
export const tokenColorBorderPrimary = css`var(--color-border-primary, ${colorBlue70})`;
export const tokenColorBorderSecondary = css`var(--color-border-secondary, ${colorCyan40})`;
export const tokenColorBorderSecondaryDark = css`var(--color-border-secondary-dark, ${colorCyan50})`;
export const tokenColorBorderSuccessLight = css`var(--color-border-success-light, ${colorGreen30})`;
export const tokenColorBorderSuccess = css`var(--color-border-success, ${colorGreen60})`;
export const tokenColorBorderWarningLight = css`var(--color-border-warning-light, ${colorYellow30})`;
export const tokenColorBorderWarning = css`var(--color-border-warning, ${colorYellow60})`;
export const tokenColorBorderDangerLight = css`var(--color-border-danger-light, ${colorRed30})`;
export const tokenColorBorderDanger = css`var(--color-border-danger, ${colorRed60})`;
export const tokenColorBorderInfoLight = css`var(--color-border-info-light, ${colorBlue30})`;
export const tokenColorBorderInfo = css`var(--color-border-info, ${colorBlue60})`;
export const tokenColorBorderMutedLight = css`var(--color-border-muted-light, ${colorGrey30})`;
export const tokenColorBorderMuted = css`var(--color-border-muted, ${colorGrey60})`;
export const tokenColorBorderBlack = css`var(--color-border-black, ${colorBlack})`;
export const tokenColorBorderWhite = css`var(--color-border-white, ${colorWhite})`;
