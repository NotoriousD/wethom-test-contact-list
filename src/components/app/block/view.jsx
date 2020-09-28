import "./style.scss";
import React from "react";
import moment from "moment";

const View = ({ data }) => {
	return (
		<div className={"header"}>
			<div className="block__list">
				{data.map(
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
						<div key={date} className="block">
							<div className="birthday">
								{moment(date).format("MMMM Do YYYY")}
							</div>
							<div className="email">{email}</div>
							<div className="phone">{phone}</div>
							<div className="address">{`${country}, ${number} ${name}, ${city}, ${state}`}</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export { View };
