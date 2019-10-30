import React from "react"
import { storiesOf } from "@storybook/react"

import Menu from "./index"
import "./style.scss"

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

const { articleURL, doi, headline, stand } = articleData

const { facebookURL, twitterURL, emailURL } = generateSocialURLs(
	doi,
	articleURL,
	headline,
	stand
)

const menuLinks = [
	{ text: "View animation", href: "#" },
	{ text: "Controls", href: "#" },
	{ text: "Replay intro", href: "#" },
	{
		text: "About Nature 150",
		href: "#",
	},
	{ text: "Credits", href: "#" },
	{ text: "Download data", href: "dat/data.zip" },
]

storiesOf("Menu", module)
	.add("default", () => (
		<Menu
			facebookURL={facebookURL}
			twitterURL={twitterURL}
			emailURL={emailURL}
			menuLinks={menuLinks}
		/>
	))
	.add("One link in menu", () => (
		<Menu
			facebookURL={facebookURL}
			twitterURL={twitterURL}
			emailURL={emailURL}
			menuLinks={[menuLinks[0]]}
		/>
	))
	.add("Two links in menu", () => (
		<Menu
			facebookURL={facebookURL}
			twitterURL={twitterURL}
			emailURL={emailURL}
			menuLinks={[menuLinks[0], menuLinks[1]]}
		/>
	))
	.add("Three links in menu", () => (
		<Menu
			facebookURL={facebookURL}
			twitterURL={twitterURL}
			emailURL={emailURL}
			menuLinks={[menuLinks[0], menuLinks[1], menuLinks[2]]}
		/>
	))
