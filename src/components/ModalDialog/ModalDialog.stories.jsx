import React from "react";

import ModalDialog from "./index";
import "./style.scss";

export default {
	title: "ModalDialog",
	component: ModalDialog,
};

export const Default = () => (
	<ModalDialog title="Graphic Legend">
		<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      pariatur culpa asperiores autem reprehenderit similique, placeat totam!
      Architecto sunt repellat doloremque consequuntur eum pariatur nobis
      similique natus itaque molestiae! Ea.
		</p>
		<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      pariatur culpa asperiores autem reprehenderit similique, placeat totam!
      Architecto sunt repellat doloremque consequuntur eum pariatur nobis
      similique natus itaque molestiae! Ea.
		</p>
	</ModalDialog>
);
