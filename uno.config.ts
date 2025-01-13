// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { generateColorRules } from "./src/utils/generateRules";
const ColorRules = generateColorRules(colors);
import { colors } from "./unocolors";
export default defineConfig({
  include: [/\.jsx$/, /\.tsx$/, /\.html$/],
  rules: [...ColorRules],
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    ["lk", "border-1 border-red-700"],
  ],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // sans: "Roboto",
        // serif: "Merriweather",
        // mono: "Fira Code",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
