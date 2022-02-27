export const fontFamilies = {
  jpFont: `"Noto Sans JP", "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic"`,
  enFont: `"Poppins", sans-serif`,
  systemFont: `-apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3, Arial, メイリオ, Meiryo, sans-serif`,
} as const;

export const colors = {
  white: `#fff`,
  defaultBlack: `#121212`,
  description: `#3e3e3e`,
  borderBlack: `rgba(0, 0, 0, 0.5)`,
  borderGray: `#f1f1f1`,
  buttonGray: `#606060`,
  disabled: `#12121236`,
  defaultBlue: `#1e65df`,
  darkBlue: `#1757c4`,
  cobaltBlue: `#2222c2`,
  ceruleanBlue: `#3131c1`,
  lightBlue: `#70c8f7`,
  defaultGreen: `#159e7c`,
  success: `rgb(60, 157, 112)`,
  error: `rgb(228, 83, 83)`,
  twitter: `#1d9bf0`,
  red: `#c03333`,
} as const;

export const breakPoints = {
  large: 1344,
  medium: 1024,
  small: 420,
} as const;

export const zIndexes = {
  mobileMenu: 10000,
  header: 9999,
  snackbar: 9998,
} as const;
