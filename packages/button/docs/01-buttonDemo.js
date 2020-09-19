import { html } from '@lion/core';
import { ChiButton } from '../ChiButton.js';

customElements.define('chi-button', ChiButton);

export const renderSolidButtons = () => html`
  <chi-button>Base</chi-button>
  <chi-button color="primary">Primary</chi-button>
`;
