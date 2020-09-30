import { html } from '@lion/core';
import { ChiHeader } from '../ChiHeader.js';
import { ChiButton } from '../../button/ChiButton.js';

if (!customElements.get('chi-button')) {
  customElements.define('chi-button', ChiButton);
}

customElements.define('chi-header', ChiHeader);

export const renderHeader = () =>
  html` <chi-header application-title="Application Title"></chi-header> `;

export const renderHeaderExtra = () =>
  html`
    <chi-header application-title="Application Title">
      <a href="#" slot="header-left">Left</a>
      <div slot="header-right">
        <a href="#">Right</a>
        <chi-button>Right</chi-button>
      </div>
    </chi-header>
  `;
