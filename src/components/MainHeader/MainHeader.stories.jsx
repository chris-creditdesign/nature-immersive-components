import React from "react"
import { storiesOf } from "@storybook/react"

import MainHeader from "./index"
import articleData from "../../data/content/article-data.json"

const {
	altPdfAvailable,
	altPdfBlurb,
	articleURL,
	doi,
	headline,
	pdfAvailable,
	stand,
} = articleData

storiesOf("MainHeader", module)
	.add("default", () => (
		<MainHeader
			altPdfAvailable={altPdfAvailable}
			altPdfBlurb={altPdfBlurb}
			articleURL={articleURL}
			doi={doi}
			headline={headline}
			pdfAvailable={pdfAvailable}
			stand={stand}
		/>
	))
	.add("pdf available", () => (
		<MainHeader
			altPdfAvailable={altPdfAvailable}
			altPdfBlurb={altPdfBlurb}
			articleURL={articleURL}
			doi={doi}
			headline={headline}
			pdfAvailable
			stand={stand}
		/>
	))
	.add("alt pdf available", () => (
		<MainHeader
			altPdfAvailable
			altPdfBlurb="PDF en Español"
			articleURL={articleURL}
			doi={doi}
			headline={headline}
			pdfAvailable
			stand={stand}
		/>
	))
