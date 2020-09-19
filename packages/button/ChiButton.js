import { LionButton } from '@lion/button';
import { buttonStyle } from './ChiButton.style.js';

export class ChiButton extends LionButton {
  static get styles() {
    return [super.styles || [], buttonStyle];
  }
}
