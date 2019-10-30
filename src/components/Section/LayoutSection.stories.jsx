import React from "react"
import { storiesOf } from "@storybook/react"

import SideImageBox from "../SideImageBox"
import LayoutStack from "../LayoutStack"
import LayoutGrid from "../LayoutGrid"
import StackBox from "../StackBox"
import Section from "./index"
import Stack from "../Stack"

storiesOf("Section", module)
	.add("default", () => (
		<Section headline="Section 1">
			<div className="test-content" />
		</Section>
	))
	.add("multiple sections", () => (
		<LayoutStack stackSpace="var(--s4)">
			<div>
				<Section
					headline="Section 1"
					centerSpace="var(--s1)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
			<div>
				<Section
					headline="Section 2"
					centerSpace="var(--s1)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
			<div>
				<Section
					headline="Section 3"
					centerSpace="var(--s1)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
		</LayoutStack>
	))
	.add("multiple sections different measure", () => (
		<LayoutStack stackSpace="var(--s4)">
			<div>
				<Section
					headline="Section 1"
					centerSpace="var(--s1)"
					centerMeasure="var(--measure-big)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
			<div>
				<Section
					headline="Section 2"
					centerSpace="var(--s1)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
			<div>
				<Section
					headline="Section 3"
					centerSpace="var(--s1)"
					centerMeasure="var(--measure-small)"
					stackSpace="var(--s-1)"
				>
					<div className="test-content" />
				</Section>
			</div>
		</LayoutStack>
	))
	.add("With grid", () => (
		<Section headline="Section 1">
			<LayoutGrid className="aboveMin" gridSpace="var(--s1)">
				<div className="test-content" />
				<div className="test-content" />
				<div className="test-content" />
				<div className="test-content" />
				<div className="test-content" />
				<div className="test-content" />
				<div className="test-content" />
			</LayoutGrid>
		</Section>
	))
	.add("With box", () => (
		<Section headline="Collection">
			<StackBox
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="View the rest of the content"
				href="https://www.nature.com"
				srcURL="img/image-small.jpg"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
				boxSpace="var(--s-1)"
				stackSpace="var(--s-1)"
			/>
		</Section>
	))
	.add("With grid of boxes", () => (
		<Section headline="Collection">
			<LayoutGrid className="aboveMin" space="var(--s-1)">
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<Stack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="Survey"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					width={1200}
					height={800}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
			</LayoutGrid>
		</Section>
	))
	.add("Text stack", () => (
		<Section headline="Collection">
			<Stack
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="View the rest of the content"
				href="https://www.nature.com"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
			/>
		</Section>
	))
	.add("With wide measure", () => (
		<Section
			headline="Collection"
			centerMeasure="var(--measure-big)"
			centerSpace="var(--s-1)"
		>
			<LayoutGrid className="aboveMin" space="var(--s1)">
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<StackBox
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="View the rest of the content"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					boxSpace="var(--s-1)"
					stackSpace="var(--s-1)"
				/>
				<Stack
					altText="This is the image alt text"
					caption="This is the image caption"
					footnote="Footnote"
					headline="Survey"
					href="https://www.nature.com"
					srcURL="img/image-small.jpg"
					text={
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
					}
					width={1200}
					height={800}
					space="var(--s-1)"
				/>
			</LayoutGrid>
		</Section>
	))
	.add("Box with image to side", () => (
		<Section headline="First issue">
			<SideImageBox
				altText="This is the image alt text"
				caption="This is the image caption"
				footnote="Footnote"
				headline="Survey"
				href="https://www.nature.com"
				srcURL="img/image-small.jpg"
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
				}
				width={1200}
				height={800}
			/>
		</Section>
	))
