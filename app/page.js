
import Carosel from "@/app/Carosel";
import ListMovies from "@/app/ListMovies";
import { getNowPlaying, getNowPlayingSeries, getPopular, getPopularSeries, getTopRated, getTopRatedSeries, getTrending, getTrendingSeries, getUpComing, getUpComingSeries } from "@/app/lib/getMovie";

export default async function Home() {
  // Now Playing
  // const nowPlayingSeries = await getNowPlayingSeries()
  // const nowPlayingMovies = await getNowPlaying()
  //Up Coming
  const upComingMovies = await getUpComing()
  const upComingSeries = await getUpComingSeries()

  //Top Rated
  const topRatedMovies = await getTopRated()
  const topRatedSeries = await getTopRatedSeries()

  //Popular
  const popularMovies = await getPopular()
  const popularSeries = await getPopularSeries()

  //Trending
  const trendingMovies = await getTrending()
  const trendingSeries = await getTrendingSeries()

  const Trending = [...trendingSeries, ...trendingMovies]
  const Popular = [...popularMovies, ...popularSeries]
  const UpComing = [...upComingMovies, ...upComingSeries]
  const TopRated = [...topRatedSeries, ...topRatedMovies]
  // const NowPlaying = [...nowPlayingSeries, ...nowPlayingMovies]
  return (
    <>
      <main>
        <Carosel trendingMovies={Trending} />
        <div className="flex flex-col space-y-10 ">
          <ListMovies Movies={Popular} Title={"Popular"} />
          <ListMovies Movies={UpComing} Title={"Up Coming"} />
          {/* <ListMovies Movies={NowPlaying} Title={"Now Playing"} /> */}
          <ListMovies Movies={TopRated} Title={"Top Rated"} />
        </div>
      </main>
    </>
  );
}
