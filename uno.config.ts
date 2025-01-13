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
} from 'unocss';
export default defineConfig({
  include: [/\.jsx$/, /\.tsx$/, /\.html$/],
  rules: [],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['lk', 'border-1 border-red-700'],
  ],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
