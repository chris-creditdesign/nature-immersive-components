import React from "react"
import { storiesOf } from "@storybook/react"

import CoverBackgroundImage from "./index"

import Heading from "../Heading"
import LayoutCenter from "../LayoutCenter"
import LayoutStack from "../LayoutStack"

const data = {
	author: "The author",
	headline:
		"Harding headline ipsum dolor sit amet, consectetur adipiscing",
	photographer: "The photographer",
	publishedAt: 1568764800,
	publishedAtString: "2019-09-18",
	stand:
		"Incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporUt enim ad minim veniam, quis nostrud exercitation.",
}

storiesOf("CoverBackgroundImage", module)
	.add("default", () => (
		<CoverBackgroundImage
			src="img/image.jpg"
			alt="This is the alt text"
		>
			<Heading
				className="centered"
				author={data.author}
				headline={data.headline}
				photographer={data.photographer}
				publishedAt={data.publishedAt}
				publishedAtString={data.publishedAtString}
				stand={data.stand}
			/>
		</CoverBackgroundImage>
	))
	.add("Half height", () => (
		<CoverBackgroundImage
			src="img/image.jpg"
			alt="This is the alt text"
			coverHeight="50vh"
		>
			<Heading
				className="centered"
				author={data.author}
				headline={data.headline}
				photographer={data.photographer}
				publishedAt={data.publishedAt}
				publishedAtString={data.publishedAtString}
				stand={data.stand}
			/>
		</CoverBackgroundImage>
	))
	.add("With text above and below", () => (
		<LayoutStack stackSpace="var(--s2)">
			<LayoutCenter>
				<p>
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Blanditiis quam
					nostrum molestias quisquam eligendi
					distinctio. Itaque enim amet dolor
					minima assumenda suscipit quos soluta
					eos debitis perferendis! Hic, cum ipsum!
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Blanditiis quam
					nostrum molestias quisquam eligendi
					distinctio. Itaque enim amet dolor
					minima assumenda suscipit quos soluta
					eos debitis perferendis! Hic, cum ipsum!
				</p>
			</LayoutCenter>
			<CoverBackgroundImage
				src="img/image.jpg"
				alt="This is the alt text"
			>
				<Heading
					className="centered"
					author={data.author}
					headline={data.headline}
					photographer={data.photographer}
					publishedAt={data.publishedAt}
					publishedAtString={
						data.publishedAtString
					}
					stand={data.stand}
				/>
			</CoverBackgroundImage>
			<LayoutCenter>
				<p>
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Blanditiis quam
					nostrum molestias quisquam eligendi
					distinctio. Itaque enim amet dolor
					minima assumenda suscipit quos soluta
					eos debitis perferendis! Hic, cum ipsum!
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Blanditiis quam
					nostrum molestias quisquam eligendi
					distinctio. Itaque enim amet dolor
					minima assumenda suscipit quos soluta
					eos debitis perferendis! Hic, cum ipsum!
				</p>
			</LayoutCenter>
		</LayoutStack>
	))
