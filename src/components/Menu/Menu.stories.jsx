import React from "react"
import { storiesOf } from "@storybook/react"

import Menu from "./index"
import css from "./style.scss"

import generateSocialURLs from "../../utils/generate-social-urls"

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

const { altPdfAvailable, altPdfBlurb, articleURL, doi, headline, pdfAvailable, stand } = articleData

const { pdfURL, altPdfURL, facebookURL, twitterURL, emailURL } = generateSocialURLs(doi, articleURL, headline, stand)

const menuLinks = [
	{ text: "One", href: "#" },
	{ text: "Two", href: "#" },
	{ text: "There", href: "#" },
	{ text: "Four", href: "#" },
	{ text: "Five", href: "#" },
]

storiesOf("Menu", module)
	.add("default", () => (
		<Menu facebookURL={facebookURL} twitterURL={twitterURL} emailURL={emailURL} menuLinks={menuLinks} />
	))
	.add("One link in menu", () => (
		<Menu
			facebookURL={facebookURL}
			twitterURL={twitterURL}
			emailURL={emailURL}
			menuLinks={[menuLinks[0]]}
		/>
	))
	.add("pdf available", () => (
		<Menu facebookURL={facebookURL} twitterURL={twitterURL} emailURL={emailURL} menuLinks={menuLinks} />
	))
	.add("alt pdf available", () => (
		<Menu facebookURL={facebookURL} twitterURL={twitterURL} emailURL={emailURL} menuLinks={menuLinks} />
	))
