import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./blogs",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Alaire Sena's blog",
      description: "My personal blog site.",
    },
    "/vi/": {
      lang: "vi-VN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },

  themeConfig,
});
