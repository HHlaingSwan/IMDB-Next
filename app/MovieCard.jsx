"use client";
import { getImagePath } from "@/app/lib/getMovie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MovieCard = ({ Movie }) => {
	const router = useRouter();
	const handleRoute = () => {
		// Navigate to the dynamic route for the selected movie
		router.push(`/movie/${Movie.id}`);
	};
	return (
		<>
			<div
				onClick={handleRoute}
				className='relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg '>
				<div className='absolute top-0 right-0 inset-0 z-20 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900/40' />
				<p className='absolute bottom-5 left-8 text-lg text-white font-bold'>
					{Movie.title}
				</p>
				<Image
					src={getImagePath(Movie.backdrop_path || Movie.poster_path)}
					alt={Movie.title}
					width={1920}
					height={1080}
					className='w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 dropshadown-xl'
				/>
			</div>
		</>
	);
};

export default MovieCard;
