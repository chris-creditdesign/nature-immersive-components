import { configure } from '@storybook/react';
import requireContext from 'require-context.macro'
import "../src/scss/index.scss"

// automatically import all files ending in *.stories.js
const req = requireContext('../src/components/', true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
