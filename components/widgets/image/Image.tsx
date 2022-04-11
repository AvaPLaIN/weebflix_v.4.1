import Image from "next/image";
import { IImageProps } from "./Image.types";
import { convertImage, toBase64 } from "./utils";

const Img = ({
  src,
  alt,
  priority = false,
  objectFit = "cover",
  quality = 60,
  placeholder = "blur",
  layout = "fill",
  blurDataUrl = `data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`,
  ...props
}: IImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      objectFit={objectFit}
      quality={quality}
      placeholder={placeholder}
      layout={layout}
      blurDataURL={blurDataUrl}
      className="image"
      {...props}
    />
  );
};

export default Img;
