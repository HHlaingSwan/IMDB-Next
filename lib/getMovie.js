const FetchData = async (url, cacheTime) => {
	url.searchParams.set("include_adult", "false");
	url.searchParams.set("include_video", "false");
	url.searchParams.set("language", "en-US");
	url.searchParams.set("region", "US");

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY} `,
		},
		next: { revalidate: cacheTime || 60 * 60 * 24 },
	};
	const response = await fetch(url.toString(), options);
	const data = await response.json();
	return data;
};
export const getNowPlaying = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/now_playing`);
	const data = await FetchData(url);
	return data.results;
}
export const getUpComing = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/upcoming`);
	const data = await FetchData(url);
	return data.results;
}

export const getTopRated = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/top_rated`);
	const data = await FetchData(url);
	return data.results;
}
export const getPopular = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/popular`);
	const data = await FetchData(url);
	return data.results;
}
export const getMovieVideo = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`);
	const data = await FetchData(url);
	return data.results;
}
export const getMovieData = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
	const data = await FetchData(url);
	return data;
}

