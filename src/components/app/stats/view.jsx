import "./style.scss";
import React, { useMemo, useState, useEffect } from "react";

const View = ({ contacts }) => {
	const [count, setCount] = useState(0);
	const [genders, setGender] = useState({
		male: 0,
		female: 0,
		none: 0,
	});
	const [mostCountGenders, setMostCountGenders] = useState({
		name: "",
		value: 0,
	});
	const [nat, setNat] = useState({});

	const getCountCollection = useMemo(() => {
		let result = contacts.reduce((acc) => {
			acc++;
			return acc;
		}, 0);
		setCount(result);
	}, [contacts]);

	const getGenderCollection = useMemo(() => {
		let result = contacts.reduce(
			(acc, contact) => {
				if (!contact.gender !== "") {
					acc[contact.gender]++;
				} else {
					acc.none++;
				}
				return acc;
			},
			{
				male: 0,
				female: 0,
				none: 0,
			}
		);
		setGender(result);
	}, [contacts]);

	const getMostCountGenders = useMemo(() => {
		if (genders.male > genders.female) {
			setMostCountGenders({
				name: "male",
				value: genders.male,
			});
		} else {
			setMostCountGenders({
				name: "female",
				value: genders.female,
			});
		}
	}, [genders]);

	const getNatsCollection = useMemo(() => {
		let result = contacts.reduce((acc, contact) => {
			if (!Object.keys(acc).includes(contact.nat)) {
				acc[contact.nat] = 1;
			} else {
				acc[contact.nat]++;
			}
			return acc;
		}, {});
		setNat(result);
	}, [contacts]);

	useEffect(() => {
		console.log(count, genders, mostCountGenders, nat);
	}, [
		count,
		genders,
		getGenderCollection,
		getCountCollection,
		getMostCountGenders,
		getNatsCollection,
		nat,
		mostCountGenders,
	]);

	return (
		<div className="stats">
			<div className="stat">
				<b>Collection size:</b> {count}
			</div>
			<div className="stat">
				<b>Male:</b> {genders.male}
			</div>
			<div className="stat">
				<b>Female:</b> {genders.female}
			</div>
			<div className="stat">
				<b>None gender:</b> {genders.none}
			</div>
			<div className="stat">
				<b>{mostCountGenders.name.charAt(0).toUpperCase()} more</b>
			</div>
			<div className="stat">
				<ul>
					{nat.length !== 0 &&
						Object.entries(nat).map((key, value) => (
							<li key={key}>
								<b>{key}:</b> {value}
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export { View };
