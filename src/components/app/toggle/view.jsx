import "./style.scss";
import React from "react";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

const View = ({ changeView }) => {
	return (
		<div className="toggle__btns">
			<Button
				icon={<AppstoreOutlined />}
				data-view={"true"}
				onClick={() => {
					changeView(true);
				}}
				size="middle"
			/>

			<Button
				icon={<UnorderedListOutlined />}
				data-view={"false"}
				onClick={() => {
					changeView(false);
				}}
				size="middle"
			/>
		</div>
	);
};

export { View };
