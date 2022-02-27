import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { breakPoints } from './variables';

export const fontSize = (px: number) => {
  const rem = px / 10;

  return css`
    font-size: ${px}px;
    font-size: ${rem}rem;
  `;
};

export const hover = (styles: string) => {
  return css`
    &:hover {
      ${styles}
    }
  `;
};

export const hoverWithTransition = (styles: string) => {
  return css`
    transition: 0.4s all;
    &:hover {
      ${styles}
    }
  `;
};

export const mqSmallerThanSmall = (styles: string | SerializedStyles) => {
  return css`
    @media only screen and (max-width: ${breakPoints.small - 1}px) {
      ${styles}
    }
  `;
};

export const mqSmallerThanMedium = (styles: string | SerializedStyles) => {
  return css`
    @media only screen and (max-width: ${breakPoints.medium - 1}px) {
      ${styles}
    }
  `;
};

export const mqLargerThanLarge = (styles: string | SerializedStyles) => {
  return css`
    @media only screen and (min-width: ${breakPoints.medium}px) {
      ${styles}
    }
  `;
};

export const mqLargerThanExtra = (styles: string | SerializedStyles) => {
  return css`
    @media only screen and (min-width: ${breakPoints.large}px) {
      ${styles}
    }
  `;
};
