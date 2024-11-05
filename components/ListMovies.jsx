import React from "react";

const ListMovies = ({ nowPlayingMovies }) => {
	return (
		<>
			<div className=' border-b mb-4 flex relative items-center justify-between border-b-neutral-200 mx-4 md:mx-10 py-2'>
				<h1 className='text-lg md:text-xl uppercase  text-red-600  font-bold '>
					Now Playing{" "}
					<span className='w-32 h-1 bg-red-600 rounded-md inline-block absolute left-0  -bottom-[1.8px]' />
				</h1>
				<p className='text-xs md:text-sm text-white bg-neutral-600 px-4 py-2 rounded-sm cursor-pointer '>
					See All
				</p>
			</div>
		</>
	);
};

export default ListMovies;
