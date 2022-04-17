import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { dbConnect } from "../../lib/mongodb";
import Anime from "../../models/Anime";
import { slugifyString } from "../../utils/slugifyString";

const AnimePage = () => {
  const { data } = useSession();
  const router = useRouter();

  const params = router.query.params || [];

  return (
    <div>
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
        id: anime.id,
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
  params: { animePath: string; id: string };
}) {
  await dbConnect();

  const anime = await Anime.findOne({
    _id: params.id,
  });

  const transformedAnime = {
    anime: JSON.parse(JSON.stringify(anime)),
  };

  return {
    props: {
      key: params.animePath,
      anime: transformedAnime.anime,
    },
  };
}

export default AnimePage;
