import * as styledComponents from 'styled-components';
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<RareInkThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
