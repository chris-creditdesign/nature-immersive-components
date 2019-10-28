import React from "react"
import { storiesOf } from "@storybook/react"

import ModalDialog from "./index"
import "./style.scss"

storiesOf("ModalDialog", module).add("default", () => (
	<ModalDialog title="Graphic Legend">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur culpa asperiores
			autem reprehenderit similique, placeat totam! Architecto sunt repellat doloremque consequuntur
			eum pariatur nobis similique natus itaque molestiae! Ea.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur culpa asperiores
			autem reprehenderit similique, placeat totam! Architecto sunt repellat doloremque consequuntur
			eum pariatur nobis similique natus itaque molestiae! Ea.
		</p>
	</ModalDialog>
))
