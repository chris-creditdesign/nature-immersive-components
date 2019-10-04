import { configure, addDecorator, addParameters } from '@storybook/react'
import requireContext from 'require-context.macro'
import "../src/css/index.css"

addParameters({
	options: {
		showPanel: false,
	}
})

// automatically import all files ending in *.stories.js
const req = requireContext('../src/components/', true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
