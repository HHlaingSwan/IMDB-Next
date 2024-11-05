
import Carosel from "@/components/Carosel";
import ListMovies from "@/components/ListMovies";
import { getNowPlaying, getPopular, getTopRated, getUpComing } from "@/lib/getMovie";

export default async function Home() {
  const nowPlayingMovies = await getNowPlaying()
  const upComingMovies = await getUpComing()
  const topRatedMovies = await getTopRated()
  const popularMovies = await getPopular()

  return (
    <>
      <main>
        <Carosel popularMovies={popularMovies} />
        <div>
          <ListMovies nowPlayingMovies={nowPlayingMovies} />
        </div>
      </main>
    </>
  );
}
