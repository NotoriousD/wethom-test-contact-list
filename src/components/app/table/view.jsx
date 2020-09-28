import "./style.scss";
import React from "react";
import moment from "moment";

const View = ({ data }) => {
	return (
		<div className={"header"}>
			<div className={"table__container"}>
				<div className="column">
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
				</div>
			</div>
		</div>
	);
};

export { View };
