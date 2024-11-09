"use client";
import { getImagePath } from "@/app/lib/getMovie";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carosel = ({ trendingMovies }) => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<>
			<div
				className='overflow-hidden cursor-pointer relative'
				ref={emblaRef}>
				<div className='flex'>
					{trendingMovies.map((movie, index) => (
						<div
							className='flex-full relative min-w-0 '
							key={index}>
							<Image
								src={getImagePath(movie.backdrop_path)}
								alt={movie.title}
								width={1920}
								height={1080}
							/>
							<div className=' absolute top-0 pt-48 xl:pt-64 left-0 bg-gradient-to-t from-[#12121210] z-20 h-full w-full md:w-1/2  p-10 space-y-5 text-white '>
								<h2 className='text-xl md:text-3xl pb-6 font-bold'>
									{movie.title}
								</h2>
								<p className='text-lg hidden md:inline font-mono'>
									{movie.overview}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='absolute top-0 right-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900/90' />
			</div>
		</>
	);
};

export default Carosel;
