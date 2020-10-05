import "./style.scss";
import React from "react";
import moment from "moment";
import { Card, Avatar, Tag } from "antd";

const View = ({ data }) => {
	const { Meta } = Card;
	return (
		<div className={"header"}>
			<div className="block__list">
				{data.map(
					({
						dob: { date },
						email,
						phone,
						picture,
						name: { title, first, last },
						location: { country, city, state, street },
						nat,
					}) => (
						<Card
							style={{ width: 300 }}
							key={date}
							cover={<img alt="example" src={picture.large} />}
						>
							<Meta
								title={`${title} ${first} ${last}`}
								description={moment(date).format(
									"MMMM Do YYYY"
								)}
							/>
							<div>{`${email}`}</div>
							<div>{`${phone}`}</div>
							<div>
								<b>{`/${country}/`}</b>
							</div>
							<div>{`${street.number} ${street.name}, ${city},`}</div>
							<div>{`${state}`}</div>
							<Tag color="volcano">{nat}</Tag>
						</Card>
					)
				)}
			</div>
		</div>
	);
};

export { View };
