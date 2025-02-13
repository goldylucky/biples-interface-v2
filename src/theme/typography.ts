import localFont from '@next/font/local';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

export const TTFirsNeue = localFont({
  src: [
    {
      path: './fonts/TTFirsNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsNeue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsNeue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

const typography = {
  fontFamily: TTFirsNeue.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 56, md: 64, lg: 72 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: pxToRem(42),
    ...responsiveFontSizes({ sm: 48, md: 54, lg: 60 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(36),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 32, md: 35, lg: 35 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 29, md: 30, lg: 30 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 24, lg: 24 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  body1: {
    lineHeight: 1.25,
    fontSize: pxToRem(15),
  },
  body2: {
    lineHeight: 1.25,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.125,
    fontSize: pxToRem(12),
  },
  overline: {
    lineHeight: 1,
    fontSize: pxToRem(10),
    textTransform: 'none',
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 15,
    fontSize: pxToRem(15),
    textTransform: 'none',
  },
} as const;

export default typography;
