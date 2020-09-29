// *** core *****************************************************************************
export {
  // lit-html
  html,
  svg,
  render,
  noChange,
  nothing,
  directive,
  isDirective,
  TemplateResult,
  SVGTemplateResult,
  renderShady,
  asyncAppend,
  asyncReplace,
  cache,
  classMap,
  guard,
  ifDefined,
  repeat,
  styleMap,
  unsafeHTML,
  until,
  NodePart,
  // lit-element
  LitElement,
  supportsAdoptingStyleSheets,
  CSSResult,
  unsafeCSS,
  css,
  defaultConverter,
  notEqual,
  UpdatingElement,
  customElement,
  property,
  query,
  queryAll,
  eventOptions,
  // open-wc
  ScopedElementsMixin,
  // lion
  dedupeMixin,
  DelegateMixin,
  SlotMixin,
  UpdateStylesMixin,
} from '@lion/core';

// *** forms *****************************************************************************
export {
  Required,
  IsString,
  EqualsLength,
  MinLength,
  MaxLength,
  MinMaxLength,
  IsEmail,
  Pattern,
  IsNumber,
  MinNumber,
  MaxNumber,
  MinMaxNumber,
  IsDate,
  MinDate,
  MaxDate,
  MinMaxDate,
  IsDateDisabled,
} from '@lion/form-core';

export { Unparseable, Validator } from '@lion/form-core';
export { loadDefaultFeedbackMessages } from '@lion/validate-messages';

// *** localize ***********************************************************************************
export {
  localize,
  LocalizeManager,
  LocalizeMixin,
  // formatting
  formatNumber,
  formatNumberToParts,
  getFractionDigits,
  getGroupSeparator,
  getDecimalSeparator,
  normalizeDateTime,
  formatDate,
  parseDate,
  getDateFormatBasedOnLocale,
  // names
  getMonthNames,
  getWeekdayNames,
} from '@lion/localize';

// *** icons **************************************************************************************
export { icons, setIcons } from '@lion/icon';

// *** overlays ***********************************************************************************
export {
  overlays,
  setOverlays,
  OverlaysManager,
  OverlayController,
  OverlayMixin,
  withBottomSheetConfig,
  withDropdownConfig,
  withModalDialogConfig,
} from '@lion/overlays';

// *** web components *****************************************************************************
export { ChiButton } from './packages/button/ChiButton.js';
export { ChiHeader } from './packages/header/ChiHeader.js';
export { ChiIcon } from './packages/icon/ChiIcon.js';
export { ChiInput } from './packages/input/ChiInput.js';

// *** styles *************************************************************************************
export { boxSizingGenerator } from './packages/style/generators/box-sizing.js';
export {
  tabletPortraitGenerator,
  tabletLandscapeGenerator,
  smallDesktopGenerator,
  desktopGenerator,
} from './packages/style/generators/media-queries.js';
export { rem } from './packages/style/values/spacing.js';
export { tableStyle } from './packages/style/table.js';
export { fontFamilyMixin, fontMixin, textStyle } from './packages/style/typography.js';
