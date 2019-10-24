/* eslint-disable react/no-danger */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import HighResImage from "./HighResImage"
import LowResImage from "./LowResImage"
import Video from "./Video"

const Figure = ({
	altText,
	caption,
	type,
	srcURL,
	className,
	captionSpace,
	videoCaptions,
}) => {
	const [firstUpdate, setFirstUpdate] = useState(false)

	useEffect(() => {
		setFirstUpdate(true)
	}, [])

	const renderedContent = {
		image: <HighResImage srcURL={srcURL} altText={altText} />,
		video: <Video srcURL={srcURL} videoCaptions={videoCaptions} />,
	}

	const style = css`
		margin: 0;

		figcaption {
			box-sizing: content-box;
			padding-left: ${captionSpace};
			padding-right: ${captionSpace};
		}
	`
	return (
		<figure className={className} css={style}>
			{firstUpdate ? (
				renderedContent[type]
			) : (
				<LowResImage
					srcURL={srcURL}
					altText={altText}
				/>
			)}
			<figcaption
				className="font-size:small-1 font-family:sans-serif"
				dangerouslySetInnerHTML={{ __html: caption }}
			/>

			{!firstUpdate && type === "video" ? (
				<figcaption className="font-size:small-1 font-family:sans-serif">
					To download the video file click{" "}
					<a
						href={`${srcURL
							.replace(/-small/, "")
							.slice(0, -4)}.mp4`}
					>
						here
					</a>
					.
				</figcaption>
			) : null}
		</figure>
	)
}

Figure.defaultProps = {
	className: "",
	captionSpace: "none",
	videoCaptions: {},
}

Figure.propTypes = {
	className: PropTypes.string,
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["image", "video", "video-autoplay"]).isRequired,
	srcURL: PropTypes.string.isRequired,
	captionSpace: PropTypes.string,
	videoCaptions: PropTypes.object,
}

export default Figure
