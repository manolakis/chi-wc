import { html } from '@lion/core';
import { MaxLength } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { ChiInput } from '../ChiInput.js';

customElements.define('chi-input', ChiInput);

export const renderBaseInput = () =>
  html` <chi-input label="First Name" placeholder="Placeholder"></chi-input> `;

export const renderValidation = () => {
  loadDefaultFeedbackMessages();
  return html`
    <chi-input
      label="First Name"
      placeholder="Placeholder"
      .validators="${[new MaxLength(5)]}"
    ></chi-input>
  `;
};
