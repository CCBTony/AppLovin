import { createGlobalStyle } from 'styled-components';

import AlegreyaSans1 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Black-2.ttf';
import AlegreyaSans2 from '@assets/fonts/AlegreyaSans/AlegreyaSans-BlackItalic-3.ttf';
import AlegreyaSans3 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Bold-4.ttf';
import AlegreyaSans4 from '@assets/fonts/AlegreyaSans/AlegreyaSans-BoldItalic-5.ttf';
import AlegreyaSans5 from '@assets/fonts/AlegreyaSans/AlegreyaSans-ExtraBold-6.ttf';
import AlegreyaSans6 from '@assets/fonts/AlegreyaSans/AlegreyaSans-ExtraBoldItalic-7.ttf';
import AlegreyaSans7 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Italic-8.ttf';
import AlegreyaSans8 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Light-9.ttf';
import AlegreyaSans9 from '@assets/fonts/AlegreyaSans/AlegreyaSans-LightItalic-10.ttf';
import AlegreyaSans10 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Medium-11.ttf';
import AlegreyaSans11 from '@assets/fonts/AlegreyaSans/AlegreyaSans-MediumItalic-12.ttf';
import AlegreyaSans12 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Regular-13.ttf';
import AlegreyaSans13 from '@assets/fonts/AlegreyaSans/AlegreyaSans-Thin-14.ttf';
import AlegreyaSans14 from '@assets/fonts/AlegreyaSans/AlegreyaSans-ThinItalic-15.ttf';

const getAlegreyaSansFontFace = (weight: number, normalSrc: string, italicSrc: string) => `
  @font-face {
    font-family: 'Alegreya Sans';
    src: url('${normalSrc}') format('truetype');
    font-style: normal;
    font-weight: ${weight};
  }
  @font-face {
    font-family: 'Alegreya Sans';
    src: url('${italicSrc}') format('truetype');
    font-style: italic;
    font-weight: ${weight};
  }
`;
const fontFaceStyle = [
  [100, AlegreyaSans13, AlegreyaSans14],
  [300, AlegreyaSans8, AlegreyaSans9],
  [400, AlegreyaSans12, AlegreyaSans7],
  [500, AlegreyaSans10, AlegreyaSans11],
  [700, AlegreyaSans3, AlegreyaSans4],
  [800, AlegreyaSans5, AlegreyaSans6],
  [900, AlegreyaSans1, AlegreyaSans2],
]
  .map((p: any[]) => getAlegreyaSansFontFace(p[0], p[1], p[2]))
  .join('\n');

export const GlobalStyle = createGlobalStyle`
  ${fontFaceStyle}
  
  * {
    padding: 0;
    margin: 0;
    font-family: 'Alegreya Sans', sans-serif;
  }
`;
