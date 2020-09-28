import axios from "axios";

const base_url = `https://randomuser.me/api/`;

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

const getContact = async (page) => {
	const count = getRandomInt(100);
	try {
		const response = await axios
			.get(`${base_url}?results=${count}&page=${page}`)
			.catch((e) => {
				throw e.message;
			});
		return response;
	} catch (error) {
		return {
			error,
		};
	}
};

export default { getContact };
