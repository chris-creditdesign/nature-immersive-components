import React, { useRef, useEffect } from "react"
import StyledBackgroundContainer from "./styles"

const Fake3DEffect = () => {
	const containerRef = useRef(null)

	useEffect(() => {
		import(/* webpackChunkName: "init" */ "./js/init")
			.then(({ default: init }) => {
				init(containerRef.current)
			})
			.catch(
				error =>
					"An error occurred while loading the component"
			)
	}, [])

	return <StyledBackgroundContainer ref={containerRef} />
}

export default Fake3DEffect
