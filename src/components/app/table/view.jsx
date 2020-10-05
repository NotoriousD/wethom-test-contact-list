import "./style.scss";
import React from "react";
import moment from "moment";
import { Table, Tag } from "antd";

const columns = [
	{
		title: "Avatar",
		key: "picture",
		dataIndex: "picture",
		render: (picture) => {
			return <img src={picture.thumbnail} alt="avatar" />;
		},
	},
	{
		title: "Birthday",
		key: "dob",
		dataIndex: "dob",
		render: (dob) => {
			return moment(dob.date).format("MMMM Do YYYY");
		},
	},
	{
		title: "Email",
		key: "email",
		dataIndex: "email",
	},
	{
		title: "Phone",
		key: "phone",
		dataIndex: "phone",
	},
	{
		title: "Location",
		key: "location",
		dataIndex: "location",
		render: (location) => {
			return (
				<>
					<div>
						<b>{`/${location.country}/`}</b>
					</div>
					<div>{`${location.number} ${location.name}, ${location.city},`}</div>
					<div>{`${location.state}`}</div>
				</>
			);
		},
	},
	{
		title: "Nationality",
		key: "nat",
		dataIndex: "nat",
		render: (nat) => {
			return <Tag color="volcano">{nat}</Tag>;
		},
	},
];

const View = ({ data }) => {
	return (
		<div className={"header"}>
			<div className={"table__container"}>
				<Table columns={columns} dataSource={data} />
				{/* <div className="column">
					<div className="table__col birthday">Birthday</div>
					<div className="table__col email">Email</div>
					<div className="table__col phone">Phone</div>
					<div className="table__col address">Address</div>
				</div>
				<div className="table">
					{data.length !== 0
						? data.map(
								({
									dob: { date },
									email,
									phone,
									location: {
										country,
										city,
										state,
										street: { number, name },
									},
								}) => (
									<div key={date} className="table__row">
										<div className="table__col birthday">
											{moment(date).format(
												"MMMM Do YYYY"
											)}
										</div>
										<div className="table__col email">
											{email}
										</div>
										<div className="table__col phone">
											{phone}
										</div>
										<div className="table__col address">{`${country}, ${number} ${name}, ${city}, ${state}`}</div>
									</div>
								)
						  )
						: "There is no data"}
				</div> */}
			</div>
		</div>
	);
};

export { View };
