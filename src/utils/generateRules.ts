import type { Rule } from "unocss";

export const generateColorRules = (
  colors: Record<string, Record<string, string>>
): Rule[] => {
  return Object.entries(colors).flatMap(([color, shades]) =>
    Object.entries(shades).flatMap(([shade, value]) => {
      // 主規則（不含透明度）
      const baseRule: Rule = [
        new RegExp(
          `^(c|text|bg|border|shadow|outline|caret|fill|stroke|from|to)-${color}-${shade}$`
        ),
        ([, type]: string[]): Record<string, string> => {
          switch (type) {
            case "c":
              return { color: value ?? "" };
            case "text":
              return { color: value ?? "" };
            case "bg":
              return { "background-color": value ?? "" };
            case "border":
              return { "border-color": value ?? "" };
            case "shadow":
              return { "box-shadow": `0 4px 6px -1px ${value ?? ""}` }; // 示例阴影
            case "outline":
              return { "outline-color": value ?? "" };
            case "caret":
              return { "caret-color": value ?? "" };
            case "fill":
              return { fill: value ?? "" };
            case "stroke":
              return { stroke: value ?? "" };
            case "from":
              return {
                "--un-gradient-from-position": "0%",
                "--un-gradient-from": `${value} var(--un-gradient-from-position)`,
                "--un-gradient-to": `${value}00 var(--un-gradient-to-position)`,
                "--un-gradient-stops":
                  "var(--un-gradient-from), var(--un-gradient-to)",
              };
            case "to":
              return {
                "--un-gradient-to-position": "100%",
                "--un-gradient-to": `${value} var(--un-gradient-to-position)`,
                "--un-gradient-stops":
                  "var(--un-gradient-from), var(--un-gradient-to)",
              };
            default:
              return {};
          }
        },
      ];

      // 支持透明度規則
      const alphaRule: Rule = [
        new RegExp(
          `^(c|text|bg|border|outline|caret|fill|stroke)-${color}-${shade}/(\\d+)$`
        ),
        ([, type, alpha]: string[]): Record<string, string> => {
          const opacity = parseInt(alpha, 10) / 100;

          const safeValue = value ?? "";
          const matches = safeValue.replace(/^#/, "").match(/.{2}/g) ?? [];
          const [r = 0, g = 0, b = 0] = matches.map((hex) => parseInt(hex, 16));

          const rgbaValue = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          switch (type) {
            case "c":
              return { color: rgbaValue };
            case "text":
              return { color: rgbaValue };
            case "bg":
              return { "background-color": rgbaValue };
            case "border":
              return { "border-color": rgbaValue };
            case "outline":
              return { "outline-color": rgbaValue };
            case "caret":
              return { "caret-color": rgbaValue };
            case "fill":
              return { fill: rgbaValue };
            case "stroke":
              return { stroke: rgbaValue };
            default:
              return {};
          }
        },
      ];

      return [baseRule, alphaRule];
    })
  ) as Rule[]; // 确保类型正确
};
