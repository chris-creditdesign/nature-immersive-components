import React from "react";

import StackBox from "./index";

export default {
	title: "StackBox",
	component: StackBox,
};

export const Default = () => (
	<StackBox
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

export const NoPic = () => (
	<StackBox
		footnote="Footnote"
		headline="Survey"
		href="https://www.nature.com"
		text={
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
		}
	/>
);

export const ExtraBoxSpace = () => (
	<StackBox
		footnote="Footnote"
		headline="Survey"
		href="https://www.nature.com"
		text={
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
		}
		boxSpace="var(--s3)"
		stackSpace="var(--s-1)"
	/>
);

export const ExtraStackSpace = () => (
	<StackBox
		footnote="Footnote"
		headline="Survey"
		href="https://www.nature.com"
		text={
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
		}
		boxSpace="var(--s-1)"
		stackSpace="var(--s3)"
	/>
);
