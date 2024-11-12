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
export const getNowPlayingSeries = async () => {
	const url = new URL(`https://api.themoviedb.org/3/tv/airing_today`);
	const data = await FetchData(url);
	return data.results;
}
export const getUpComing = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/upcoming`);
	const data = await FetchData(url);
	return data.results;
}
export const getUpComingSeries = async () => {
	const url = new URL(`https://api.themoviedb.org/3/tv/on_the_air`);
	const data = await FetchData(url);
	return data.results;
}

export const getTopRated = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/top_rated`);
	const data = await FetchData(url);
	return data.results;
}
export const getTopRatedSeries = async () => {
	const url = new URL(`https://api.themoviedb.org/3/tv/top_rated`);
	const data = await FetchData(url);
	return data.results;
}
export const getPopular = async () => {
	const url = new URL(`https://api.themoviedb.org/3/movie/popular`);
	const data = await FetchData(url);
	return data.results;
}
export const getPopularSeries = async () => {
	const url = new URL(`https://api.themoviedb.org/3/tv/popular`);
	const data = await FetchData(url);
	return data.results;
}
export const getSeriesVideo = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/tv/${id}/videos`);
	const data = await FetchData(url);
	return data.results;
}
export const getMovieVideo = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`);
	const data = await FetchData(url);
	return data.results;
}
export const getMovieCast = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/movie/${id}/credits`);
	const data = await FetchData(url);
	return data.cast;
}
export const getMovieData = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
	const data = await FetchData(url);
	return data;
}
export const getSeriesData = async (id) => {
	const url = new URL(`https://api.themoviedb.org/3/tv/${id}`);
	const data = await FetchData(url);
	return data;
}
// export const getMovie = async (id) => {
// 	const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
// 	const data = await FetchData(url);
// 	return data;
// }
export const getTrending = async () => {
	const url = new URL(`https://api.themoviedb.org/3/trending/movie/day`);
	const data = await FetchData(url);
	return data.results;
}
export const getTrendingSeries = async () => {
	const url = new URL(`https://api.themoviedb.org/3/trending/tv/day`);
	const data = await FetchData(url);
	return data.results;
}

export const getImagePath = (path) => {
	return `https://image.tmdb.org/t/p/original/${path}`;
}

