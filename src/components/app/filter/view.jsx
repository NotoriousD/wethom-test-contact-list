import "./style.scss";
import React from "react";

const View = ({ changeInput, changeSelect, selectValue }) => {
	return (
		<div className={"filters"}>
			<select value={selectValue} onChange={changeSelect}>
				<option value="name">Full Name</option>
				<option value="gender">Gender</option>
				<option value="nat">Nationality</option>
				<option value="login">Creator</option>
			</select>
			<input type="text" onChange={changeInput} />
		</div>
	);
};

export { View };
