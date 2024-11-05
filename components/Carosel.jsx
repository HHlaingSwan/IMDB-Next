"use client";
import { getImagePath } from "@/lib/getMovie";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carosel = ({ popularMovies }) => {
	console.log(popularMovies);

	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<>
			<div
				className='overflow-hidden cursor-pointer relative'
				ref={emblaRef}>
				<div className='flex'>
					{popularMovies.map((movie) => (
						<div
							className='flex-full relative min-w-0 '
							key={movie.id}>
							<Image
								src={getImagePath(movie.backdrop_path)}
								alt={movie.title}
								width={1920}
								height={1080}
							/>
							<div className='hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-gradient-to-t from-[#12121210] z-20 h-full w-1/2  p-10 space-y-5 text-white '>
								<h2 className='text-3xl font-bold'>{movie.title}</h2>
								<p className='text-lg font-mono'>{movie.overview}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Carosel;
