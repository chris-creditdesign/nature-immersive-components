import React from "react"
import { storiesOf } from "@storybook/react"

import Stack from "../Stack"
import LayoutSection from "./index"
import Grid from "../Grid"
import LayoutBoxStack from "../LayoutBoxStack"
import LayoutStack from "../LayoutStack"
import LayoutSideImage from "../LayoutSideImage"
import LayoutBoxSideImage from "../LayouBoxSideImage"

storiesOf("LayoutSection", module)
	.add("default", () => (
		<Stack elem="main" space="var(--s4)">
			<LayoutSection headline="Section 1">
				<div className="content" />
			</LayoutSection>
			<LayoutSection headline="Section 2">
				<div className="content" />
			</LayoutSection>
			<LayoutSection headline="Section 3">
				<div className="content" />
			</LayoutSection>
		</Stack>
	))
	.add("With Grid", () => (
		<LayoutSection headline="Highlights">
			<Grid space="var(--s0)">
				<LayoutBoxStack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="Editorials"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
				/>

				<LayoutBoxStack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="Feature: By the numbers"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
				/>

				<LayoutBoxStack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="10 Nature papers (N&V)"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
				/>

				<LayoutStack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="Survey"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
				/>
			</Grid>
		</LayoutSection>
	))
	.add("With Box", () => (
		<LayoutSection headline="Collection">
			<LayoutBoxStack
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="View the rest of the content"
				href="https://www.nature.com"
				srcURL="img/image-small.jpg"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>
		</LayoutSection>
	))
	.add("Text stack", () => (
		<LayoutSection headline="About">
			<LayoutStack
				headline="Marketing"
				href="https://www.nature.com"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>

			<LayoutStack
				headline="History"
				href="https://www.nature.com"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>
		</LayoutSection>
	))
	.add("Box with image to side", () => (
		<LayoutSection headline="First issue">
			<LayoutBoxSideImage
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="Download the pdf"
				href="https://www.nature.com"
				srcURL="img/image-small.jpg"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>

			<LayoutSideImage
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="View the rest of the content"
				href="https://www.nature.com"
				srcURL="img/image-small.jpg"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>
		</LayoutSection>
	))
