import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

const ListMovies = ({ Movies, Title }) => {
	return (
		<>
			<div className=' border-b mb-4 flex relative items-center justify-between border-b-neutral-200 mx-4 md:mx-10 py-2'>
				<h1 className='text-lg md:text-xl uppercase  text-red-600  font-bold '>
					{Title}
					<span className='w-32 h-1 bg-red-600 rounded-md inline-block absolute left-0  -bottom-[1.8px]' />
				</h1>
				<p className='text-xs md:text-sm text-white bg-neutral-600 px-4 py-2 rounded-sm cursor-pointer '>
					See All
				</p>
			</div>
			<div
				className={cn(
					"flex space-x-5 overflow-scroll p-5 lg:px-10 scrollbar-hide"
				)}>
				{Movies.map((Movie) => {
					return (
						<MovieCard
							key={Movie.id}
							Movie={Movie}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ListMovies;
