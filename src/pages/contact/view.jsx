import React, { useState, useEffect, useCallback, useMemo } from "react";
import { contactAPI } from "../../api";
import { Table } from "../../components";
import { ToggleBtns } from "../../components";
import { Block } from "../../components";
import { Filter } from "../../components";
import { Stats } from "../../components";
import { Button, Tooltip } from "antd";
import { RedoOutlined } from "@ant-design/icons";

const View = () => {
	const [contacts, setContact] = useState([]);
	const [page, setPage] = useState(1);
	const [view, setView] = useState(true);
	const [filterType, setFilterType] = useState("name");
	const [filterValue, setFilterValue] = useState("");

	const getViewFromLC = () => {
		setView(JSON.parse(localStorage.getItem("view")));
	};

	const fetchContact = useCallback((page) => {
		contactAPI
			.getContact(page)
			.then(({ data: { results } }) => {
				setContact(results);
				console.log(results);
			})
			.catch((e) => console.log(e.message));
	}, []);

	useEffect(() => {
		getViewFromLC();
		fetchContact(page);
	}, [fetchContact, page]);

	const handleChangeView = useCallback((value) => {
		setView(value);
		localStorage.setItem("view", value);
	}, []);

	const handleUpdateContact = useCallback(() => {
		fetchContact(1);
		setPage(1);
	}, [fetchContact, setPage]);

	const handleChangeFilterType = useCallback(
		(e) => {
			setFilterType(e.target.value);
		},
		[setFilterType]
	);

	const handleChangeFilterValue = useCallback(
		(value) => {
			setFilterValue(value);
			console.log(filterValue);
		},
		[setFilterValue]
	);

	const getFilteredData = useMemo(() => {
		if (!!filterValue) {
			if (filterType === "name" || filterType === "login") {
				return contacts.filter((contact) =>
					Object.values(contact[filterType]).includes(filterValue)
				);
			} else {
				return contacts.filter(
					(contact) =>
						contact[filterType].toLowerCase() ===
						filterValue.toLowerCase()
				);
			}
		} else {
			return contacts;
		}
	}, [filterValue, filterType, contacts]);

	return (
		<div className="container">
			<div className="toggler">
				<Tooltip title="Update contacts">
					<Button
						shape="circle"
						onClick={handleUpdateContact}
						icon={<RedoOutlined />}
					/>
				</Tooltip>
				<ToggleBtns changeView={handleChangeView} />
			</div>
			<div className="filter">
				<Filter
					changeInput={handleChangeFilterValue}
					changeSelect={handleChangeFilterType}
					selectValue={filterType}
					data={contacts}
				/>
			</div>
			{view ? (
				<Table data={getFilteredData} />
			) : (
				<Block data={getFilteredData} />
			)}
			{/* <Stats contacts={contacts} /> */}
		</div>
	);
};

export { View };
