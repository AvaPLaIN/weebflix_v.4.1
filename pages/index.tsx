import type { NextPage } from "next";
import { dbConnect } from "../lib/mongodb";
import Anime from "../models/Anime";
import HighlightSlider from "../components/modules/highlight-slider/HighlightSlider";

const Home: NextPage = ({ highlightSliderAnimes }: { [key: string]: any }) => {
  return (
    <div>
      <HighlightSlider highlightAnimes={highlightSliderAnimes} />
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  await dbConnect();
  const highlightSliderAnimes = await Anime.find(
    { status: "ongoing" },
    { episodes: 0 }
  ).limit(5);

  const transform = {
    highlightSliderAnimes: JSON.parse(JSON.stringify(highlightSliderAnimes)),
  };

  return {
    props: {
      highlightSliderAnimes: transform.highlightSliderAnimes,
    },
  };
}

export default Home;
