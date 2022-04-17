import { ISliderItem } from "./SliderItem.types";
import Link from "next/link";
import { SliderItemContainer } from "./SliderItem.styles";
import Image from "../../../../widgets/image";
import { slugifyString } from "../../../../../utils/slugifyString";

const SliderItem = ({ anime }: ISliderItem) => {
  const slugifiedTitle = slugifyString(anime?.titleEng || "");

  return (
    <SliderItemContainer className="keen-slider__slide">
      <Link
        href={{
          pathname: `/anime/${slugifiedTitle}/${anime._id}`,
        }}
      >
        <a className="link">
          <div className="airing-slider-image">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(
                anime.thumnail || ""
              )}`}
              alt="airing anime image"
              quality={60}
            />
          </div>
          <p className="title">{anime?.titleEng}</p>
        </a>
      </Link>
    </SliderItemContainer>
  );
};

export default SliderItem;
