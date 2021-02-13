/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { ThemeProvider } from './src/context/themeContext';
// You can delete this file if you're not using it
require('prismjs/themes/prism-okaidia.css')

export const wrapRootElement = ({element}) => (
    <ThemeProvider>{element}</ThemeProvider>
)
