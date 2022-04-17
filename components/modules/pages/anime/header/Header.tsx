import { HeaderContainer } from "./Header.styles";
import Image from "../../../../widgets/image";

const AnimeHeader = ({
  banner,
  thumnail,
  genres,
  titleEng,
  groupName,
  episodesCount,
  status,
  type,
  released,
  titleJap,
}: any) => {
  return (
    <HeaderContainer>
      <div className="banner-container">
        <Image
          src={`/api/imageProxy?url=${encodeURIComponent(banner)}`}
          alt={`${titleEng} banner`}
          priority
          quality={80}
        />
      </div>
      <div className="header-info-container">
        <div className="thumnail-container">
          <Image
            src={`/api/imageProxy?url=${encodeURIComponent(thumnail)}`}
            alt={`${titleEng} thumnail`}
            priority
            quality={60}
          />
          <div className="type">{type}</div>
          <div className="status">{status}</div>
        </div>
        <div className="info-container">
          <h1 className="title">
            <span className="title-group">{groupName}</span>
            <span className="title-detail">
              {titleEng?.replace(groupName, "")}
            </span>
          </h1>
          <div className="genres">
            {genres?.map((genre: string) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <div className="info">
            <div className="titleJap">{titleJap}</div>
            <div className="released">Released: {released}</div>
            {type !== "movie" && (
              <p className="episodes-count">Episodes: {episodesCount}</p>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default AnimeHeader;
