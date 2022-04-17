import { Anime } from "../../../../../../../types/anime";

export interface IHighlightItemProps {
  anime: Anime & {
    banner: string | number | boolean;
    groupName: string | RegExp;
  };
}
