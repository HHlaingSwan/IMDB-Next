import {
	getImagePath,
	getMovieData,
	getMovieVideo,
	getSeriesData,
	getSeriesVideo,
} from "@/app/lib/getMovie";
import Image from "next/image";
import React from "react";

const MoiveDatail = async ({ params: { id } }) => {
	const movie = await getMovieData(id);
	const serie = await getSeriesData(id);
	const movieVd = await getMovieVideo(id);
	const seriesVd = await getSeriesVideo(id);

	const datail = movie || serie;
	const videos = movieVd || seriesVd;
	// const vd = videos.map((video) => ({
	// 	id: video.id,
	// 	key: video.key,
	// }));
	return (
		<>
			{/* {isLoading ? (
				<div>Loading...</div>
			) : ( */}
			<>
				<div className='px-10'>
					<div className='py-10 pt-24 flex flex-col lg:flex-row lg:gap-10  items-start'>
						<div className='w-full lg:w-1/2 md:min-h-96 min-h-72 rounded-md overflow-hidden'>
							<Image
								src={getImagePath(datail.backdrop_path || datail.poster_path)}
								alt={datail.title || datail.name}
								width={1920}
								height={1080}
								className='w-full h-60 md:h-96 object-cover shadow-md shadow-gray-900 drop-shadown-xl '
							/>
						</div>
						<div className='w-full lg:w-1/2 text-white flex flex-col gap-2'>
							<h1 className='text-2xl font-bold'>
								{datail.title || datail.name}
							</h1>
							<p className='text-base font-mono text-gray-300'>
								{datail.overview}
							</p>
							<p className='text-base font-serif'>
								Release_Date
								<span className='text-gray-600'> : {datail.release_date}</span>
							</p>
							<p className='text-base font-serif'>
								Runtime{" "}
								<span className='text-gray-600'> : {datail.runtime}</span>
							</p>
							<p className='text-base font-serif'>
								Status : {""}
								<span
									className={
										datail.status === "Released"
											? "text-green-600"
											: "text-red-600"
									}>
									{datail.status}
								</span>
							</p>
						</div>
					</div>
				</div>
			</>
			{/* )} */}
		</>
	);
};

export default MoiveDatail;
