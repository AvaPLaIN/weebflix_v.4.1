import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { dbConnect } from "../../lib/mongodb";
import Anime from "../../models/anime/Anime";
import { slugifyString } from "../../utils/slugifyString";
import { Anime as AnimeType } from "../../types/anime";
import Header from "../../components/layout/Head";
import AnimeHeader from "../../components/modules/pages/anime/header/Header";

const AnimePage = ({ anime }: { anime: AnimeType }) => {
  const { data } = useSession();
  const router = useRouter();

  const params = router.query.params || [];

  return (
    <div>
      <Header title={`Weebflix - ${anime?.titleEng}`} />
      <AnimeHeader
        banner={anime.banner}
        thumnail={anime.thumnail}
        titleEng={anime.titleEng}
        titleJap={anime.titleJap}
        genres={anime.genres}
        released={anime.released}
        type={anime.type}
        groupName={anime.groupName}
        episodesCount={anime.episodesCount}
        status={anime.status}
      />
      <pre>{JSON.stringify(anime, undefined, 2)}</pre>
      <pre>{JSON.stringify(params, undefined, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getStaticPaths() {
  await dbConnect();

  const animes = await Anime.find({});

  const paths = animes.map((anime) => {
    const slugifiedTitle = slugifyString(anime?.titleEng);
    const stringifiedId = anime?._id?.toString();

    return {
      params: {
        animePath: [slugifiedTitle, stringifiedId],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { animePath: [string, string] };
}) {
  await dbConnect();

  const anime = await Anime.findOne(
    {
      _id: params.animePath[1],
    },
    { episodes: 0 }
  );

  const transformedAnime = {
    anime: JSON.parse(JSON.stringify(anime)),
  };

  return {
    props: {
      key: params,
      anime: transformedAnime.anime,
    },
  };
}

export default AnimePage;
