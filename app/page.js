
import Carosel from "@/app/Carosel";
import ListMovies from "@/app/ListMovies";
import { getNowPlaying, getPopular, getTopRated, getTrending, getUpComing } from "@/lib/getMovie";

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying()
  const upComingMovies = await getUpComing()
  const topRatedMovies = await getTopRated()
  const popularMovies = await getPopular()
  const trendingMovies = await getTrending()
  return (
    <>
      <main>
        <Carosel trendingMovies={trendingMovies} />
        <div className="flex flex-col space-y-10 ">
          <ListMovies Movies={popularMovies} Title={"Popular"} />
          <ListMovies Movies={upComingMovies} Title={"Up Coming"} />
          {/* <ListMovies Movies={nowPlayingMovies} Title={"Now Playing"} /> */}
          <ListMovies Movies={topRatedMovies} Title={"Top Rated"} />
        </div>
      </main>
    </>
  );
}
