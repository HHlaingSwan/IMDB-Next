
import Carosel from "@/app/Carosel";
import ListMovies from "@/app/ListMovies";
import { getMovie, getNowPlaying, getPopular, getTopRated, getUpComing } from "@/lib/getMovie";

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying()
  const upComingMovies = await getUpComing()
  const topRatedMovies = await getTopRated()
  const popularMovies = await getPopular()

  const getMovies = [
    ...popularMovies,
    ...nowPlayingMovies,
    ...upComingMovies,
    ...topRatedMovies,
  ];



  return (
    <>
      <main>
        <Carosel getMovies={getMovies} />
        <div className="flex flex-col space-y-10 ">
          <ListMovies Movies={popularMovies} Title={"Popular"} />
          <ListMovies Movies={upComingMovies} Title={"Up Coming"} />
          <ListMovies Movies={topRatedMovies} Title={"Top Rated"} />
          <ListMovies Movies={nowPlayingMovies} Title={"Now Playing"} />
        </div>
      </main>
    </>
  );
}
