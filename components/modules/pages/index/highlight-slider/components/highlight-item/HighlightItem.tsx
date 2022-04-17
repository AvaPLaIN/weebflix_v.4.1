import Link from "next/link";
import React, { memo } from "react";
import { HighlightItemContainer } from "./HighlightItem.styles";
import Image from "../../../../../../widgets/image";
import { IHighlightItemProps } from "./HighlightItem.types";
import { slugifyString } from "../../../../../../../utils/slugifyString";

// eslint-disable-next-line react/display-name
const HighlightItem = memo(({ anime }: IHighlightItemProps) => {
  const slugifiedTitle = slugifyString(anime?.titleEng || "");

  return (
    <HighlightItemContainer>
      <Image
        src={`/api/imageProxy?url=${encodeURIComponent(anime.banner)}`}
        alt={`${anime.titleEng} banner`}
        priority
        quality={80}
      />
      <div className="highlight-anime-details-container">
        <p className="genres">
          {anime?.genres?.slice(-3).map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </p>
        <h1 className="title">
          <span className="title-group">{anime.groupName}</span>
          <br />
          {anime?.titleEng?.replace(anime.groupName, "")}
        </h1>
        <p className="description">{anime?.description}</p>
        <div className="control-buttons">
          {/* TODO change button Link structure */}
          <button>
            <Link href={{ pathname: `/anime/${slugifiedTitle}/${anime._id}` }}>
              <a className="link">Play</a>
            </Link>
          </button>
          <button>
            <Link href={{ pathname: `/anime/${slugifiedTitle}/${anime._id}` }}>
              <a className="link">Read More</a>
            </Link>
          </button>
        </div>
      </div>
    </HighlightItemContainer>
  );
});

export default HighlightItem;
