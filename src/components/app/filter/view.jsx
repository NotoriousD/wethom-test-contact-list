import "./style.scss";
import React, { useMemo } from "react";
import { Input, Select, Checkbox, Row, Col } from "antd";

const style = {
	row: {
		padding: "20px",
		borderRadius: "10px",
		background: "#fff",
	},
	col: {
		height: "40px",
		padding: "0 8px",
	},
	selects: {
		height: "40px",
	},
};

const View = ({ changeInput, changeSelect, selectValue, data }) => {
	const { Option } = Select;
	const getFilteredNat = useMemo(() => {
		const result = data.map(({ nat }) => {
			return nat;
		});
		return [...new Set(result)];
	}, [data]);
	return (
		<div className={"filters"}>
			<Row style={style.row}>
				<Col span={10} style={style.col}>
					<Input
						size="large"
						placeholder="Search by full name"
						onChange={changeInput}
					/>
				</Col>
				<Col span={4} style={style.col}>
					<Select
						style={style.selects}
						allowClear
						style={{ width: 200 }}
						placeholder="Select a person"
						defaultValue={""}
						/* onChange={changeSelect} */
					>
						<Option value="male">Male</Option>
						<Option value="female">Female</Option>
						<Option value="indeterminate">Indeterminate</Option>
					</Select>
				</Col>
				<Col span={6} style={style.col}>
					<Select
						style={style.selects}
						mode="multiple"
						allowClear
						style={{ width: "100%" }}
						placeholder="Please select"
						/* onChange={handleChange} */
					>
						{getFilteredNat.map((nat) => (
							<Option key={nat} value={nat}>
								{nat}
							</Option>
						))}
					</Select>
				</Col>
				<Col span={4} style={style.col}>
					<Checkbox /* onChange={onChange} */>I am creator</Checkbox>
				</Col>
			</Row>

			{/* <select value={selectValue} onChange={changeSelect}>
				<option value="name">Full Name</option>
				<option value="gender">Gender</option>
				<option value="nat">Nationality</option>
				<option value="login">Creator</option>
			</select>
			<input type="text" onChange={changeInput} /> */}
		</div>
	);
};

export { View };
