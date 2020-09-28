import "./style.scss";
import React from "react";

const View = ({ changeView }) => {
	return (
		<div className="toggle__btns">
			<button
				data-view={"true"}
				onClick={() => {
					changeView(true);
				}}
				className={"toggle__btn"}
			>
				Table
			</button>
			<button
				data-view={"false"}
				onClick={() => {
					changeView(false);
				}}
				className={"toggle__btn"}
			>
				Blocks
			</button>
		</div>
	);
};

export { View };
