import type { NextPage } from "next";
import { dbConnect } from "../lib/mongodb";
import Anime from "../models/Anime";
import HighlightSlider from "../components/modules/highlight-slider/HighlightSlider";
import GroupSlider from "../components/modules/group-slider/GroupSlider";
import Header from "../components/layout/Head";

const Home: NextPage = ({ airingAnimes, movies }: { [key: string]: any }) => {
  return (
    <div>
      <Header title="Weebflix" />
      <HighlightSlider highlightAnimes={airingAnimes.slice(0, 5)} />
      <GroupSlider title="Simulcast Season" animes={airingAnimes} />
      <GroupSlider title="Movies" animes={movies} />
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  await dbConnect();

  const airingAnimes = await Anime.find(
    { status: "ongoing" },
    { episodes: 0 }
  ).limit(20);
  const movies = await Anime.find({ type: "movie" }).limit(20);

  const transform = {
    airingAnimes: JSON.parse(JSON.stringify(airingAnimes)),
    movies: JSON.parse(JSON.stringify(movies)),
  };

  return {
    props: {
      airingAnimes: transform.airingAnimes,
      movies: transform.movies,
    },
  };
}

export default Home;
