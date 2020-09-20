import { LitElement, html, nothing } from '@lion/core';
import { headerStyle } from './ChiHeader.style.js';
import chiLogo from './assets/images/yin-yang.svg.js';
import '../../chi-icon.js';

export class ChiHeader extends LitElement {
  static get properties() {
    return {
      applicationTitle: { type: String, attribute: 'application-title' },
    };
  }

  static get styles() {
    return [super.styles || [], headerStyle];
  }

  constructor() {
    super();

    /** @type {string} */
    this.applicationTitle = null;
  }

  render() {
    return html`<header class="header">
      <nav class="header__content">
        <div class="header__brand">
          <slot name="header-brand-logo">
            <chi-icon class="header__brand__logo" .svg="${chiLogo}"></chi-icon>
          </slot>
          ${this.applicationTitle
            ? html`<span class="header__brand__title">${this.applicationTitle}</span> `
            : nothing}
        </div>
      </nav>
    </header>`;
  }
}
