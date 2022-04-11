export interface IImageProps {
  src: string;
  alt: string;
  layout?: "intrinsic" | "fixed" | "responsive" | "fill";
  priority?: boolean;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  quality?: number;
  placeholder?: "blur" | "empty" | undefined;
  blurDataUrl?: string;
}
