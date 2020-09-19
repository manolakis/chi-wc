import { LionInput } from '@lion/input';
import { inputStyle } from './ChiInput.style.js';

export class ChiInput extends LionInput {
  static get styles() {
    return [super.styles || [], inputStyle];
  }
}
