import JsIconSvg from "@/assets/images/skills/js-icon.png";
import JsIconWebP from "@/assets/images/skills/js-icon.webp";
import TsIconSvg from "@/assets/images/skills/ts-icon.png";
import TsIconWebP from "@/assets/images/skills/ts-icon.webp";
import VueIconSvg from "@/assets/images/skills/vue-icon.svg";
import VueIconWebP from "@/assets/images/skills/vue-icon.webp";
import ReactIconSvg from "@/assets/images/skills/react-icon.png";
import ReactIconWebP from "@/assets/images/skills/react-icon.webp";
import ReactQueryIconSvg from "@/assets/images/skills/react-query-icon.svg";
import ReactQueryIconWebP from "@/assets/images/skills/react-query-icon.webp";
import ReduxIconSvg from "@/assets/images/skills/redux-icon.svg";
import ReduxIconWebP from "@/assets/images/skills/redux-icon.webp";
import VuexIconSvg from "@/assets/images/skills/vuex-icon.svg";
import VuexIconWebP from "@/assets/images/skills/vuex-icon.webp";
import PiniaIconSvg from "@/assets/images/skills/pinia-icon.svg";
import PiniaIconWebP from "@/assets/images/skills/pinia-icon.webp";
import GitIconSvg from "@/assets/images/skills/git-icon.png";
import GitIconWebP from "@/assets/images/skills/git-icon.webp";
import FigmaIconSvg from "@/assets/images/skills/figma-icon.svg";
import FigmaIconWebP from "@/assets/images/skills/figma-icon.webp";
import WebpackIconSvg from "@/assets/images/skills/webpack-icon.svg";
import WebpackIconWebP from "@/assets/images/skills/webpack-icon.webp";
import ViteIconSvg from "@/assets/images/skills/vite-icon.svg";
import ViteIconWebP from "@/assets/images/skills/vite-icon.webp";

export default function useHomeSkills () {
  const skillsList = [
    {
      imageSvg: JsIconSvg,
      imageWebP: JsIconWebP,
      title: 'JavaScript'
    },
    {
      imageSvg: TsIconSvg,
      imageWebP: TsIconWebP,
      title: 'TypeScript'
    },
    {
      imageSvg: VueIconSvg,
      imageWebP: VueIconWebP,
      title: 'Vue JS'
    },
    {
      imageSvg: VuexIconSvg,
      imageWebP: VuexIconWebP,
      title: 'VueX'
    },
    {
      imageSvg: PiniaIconSvg,
      imageWebP: PiniaIconWebP,
      title: 'Pinia'
    },
    {
      imageSvg: ReactIconSvg,
      imageWebP: ReactIconWebP,
      title: 'React JS'
    },
    {
      imageSvg: ReduxIconSvg,
      imageWebP: ReduxIconWebP,
      title: 'Redux'
    },
    {
      imageSvg: ReactQueryIconSvg,
      imageWebP: ReactQueryIconWebP,
      title: 'React Query'
    },
    {
      imageSvg: GitIconSvg,
      imageWebP: GitIconWebP,
      title: 'Git'
    },
    {
      imageSvg: FigmaIconSvg,
      imageWebP: FigmaIconWebP,
      title: 'Figma'
    },
    {
      imageSvg: WebpackIconSvg,
      imageWebP: WebpackIconWebP,
      title: 'Webpack'
    },
    {
      imageSvg: ViteIconSvg,
      imageWebP: ViteIconWebP,
      title: 'Vite'
    },
  ];

  return {
    skillsList
  };
}
