import { ISliderItem } from "./SliderItem.types";
import Link from "next/link";
import { SliderItemContainer } from "./SliderItem.styles";
import Image from "../../../../widgets/image";

const SliderItem = ({ anime }: ISliderItem) => {
  return (
    <SliderItemContainer className="keen-slider__slide">
      <Link href={{ pathname: `/anime/${anime._id}` }}>
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
