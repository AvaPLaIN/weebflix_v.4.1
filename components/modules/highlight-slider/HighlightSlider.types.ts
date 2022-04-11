import { Anime } from "../../../types/anime";

export type IHighlightSliderProps = {
  highlightAnimes: (Anime & {
    banner: string | number | boolean;
    groupName: string | RegExp;
  })[];
};
