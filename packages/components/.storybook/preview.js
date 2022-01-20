import {
  defineCustomElements
} from '../dist/esm/loader.js';
import '../www/build/nnds-components.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
