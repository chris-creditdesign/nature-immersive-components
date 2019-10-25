import React from "react"
import { storiesOf } from "@storybook/react"

import Menu from "./index"
import css from "./style.scss"

const articleData = {
	twitterHandle: "@nature",
	title: "150 years of Nature",
	description:
		"Description description description description description description description description description",
	headline: "150 years of Nature",
	stand: "",
	author: "",
	photographer: "",
	articleURL: "https://www.nature.com/articles/",
	immersiveURL: "https://www.nature.com/immersive/",
	doi: "d41586-019-00000-0",
	pdfAvailable: false,
	altPdfAvailable: false,
	altPdfBlurb: "",
	publishedAt: 0,
	publishedAtString: "",
}

// const { altPdfAvailable, altPdfBlurb, articleURL, doi, headline, pdfAvailable, stand } = articleData

const menuLinks = [
	{ text: "One", href: "#" },
	{ text: "Two", href: "#" },
	{ text: "There", href: "#" },
	{ text: "Four", href: "#" },
	{ text: "Five", href: "#" },
]

storiesOf("Menu", module).add("default", () => <Menu menuLinks={menuLinks} />)
// .add("pdf available", () => (
// 	<Menu
// 		altPdfAvailable={altPdfAvailable}
// 		altPdfBlurb={altPdfBlurb}
// 		articleURL={articleURL}
// 		doi={doi}
// 		headline={headline}
// 		pdfAvailable
// 		stand={stand}
// 	/>
// ))
// .add("alt pdf available", () => (
// 	<Menu
// 		altPdfAvailable
// 		altPdfBlurb="PDF en Español"
// 		articleURL={articleURL}
// 		doi={doi}
// 		headline={headline}
// 		pdfAvailable
// 		stand={stand}
// 	/>
// ))
