import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization:
				"Client-ID c6bc3a781cc03bac96478b10c28b7d41976c3bc1f66a5abc3783d95e59b257d0",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;
