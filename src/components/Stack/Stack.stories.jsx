import React from "react";

import Stack from "./index";
import Section from "../Section";
import SideImageBox from "../SideImageBox";
import LayoutStack from "../LayoutStack";
import "./style.scss";

export default {
	title: "Stack",
	component: Stack,
};

export const Default = () => (
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
	/>
);

export const WithoutAPic = () => (
	<Stack
		footnote="Footnote"
		headline="Survey"
		href="https://www.nature.com"
		text={
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
		}
	/>
);

export const WithExtraStackSpace = () => (
	<Stack
		footnote="Footnote"
		headline="Survey"
		href="https://www.nature.com"
		text={
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
		}
		stackSpace="var(--s3)"
	/>
);

export const WithStackOfSections = () => (
	<LayoutStack stackSpace="var(--s4)" elem="main">
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
	</LayoutStack>
);
