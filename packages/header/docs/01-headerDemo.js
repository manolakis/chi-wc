import { html } from '@lion/core';
import { ChiHeader } from '../ChiHeader.js';

customElements.define('chi-header', ChiHeader);

export const renderHeader = () =>
  html` <chi-header application-title="Application Title"></chi-header> `;
