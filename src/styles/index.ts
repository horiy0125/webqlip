import { css } from '@emotion/react';
import { colors } from './variables';

export const fullWidthInlineBlockStyle = css`
  display: inline-block;
  width: 100%;
`;

export const underlinedBlueLinkStyle = css`
  text-decoration: underline;
  color: ${colors.defaultBlue};
`;

export const innerHTMLStyle = css`
  display: inline-block;
  width: 100%;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 32px 0 16px 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 16px 0 8px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 16px 0 4px 0;
  }

  p {
    font-weight: 400;
    line-height: 1.8;
    padding: 16px 0;
  }

  a {
    ${underlinedBlueLinkStyle};
  }

  img {
    width: 100%;
    margin: 16px 0;
  }

  pre {
    margin: 16px 0;
    background: #1e1e1e;
    line-height: 1.8;
    color: #fff;

    code {
      margin: 0;
      background: none;
      border-radius: 0;
    }
  }

  code {
    margin: 0 4px;
    padding: 2px 4px;

    border-radius: 4px;

    background: ${colors.borderGray};

    font-size: inherit;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  blockquote {
    background: rgb(221, 221, 221);
    padding: 16px;
    margin: 16px 0;
  }

  ul {
    padding: 16px 0 16px 40px;
  }

  li {
    line-height: 1.8;
  }
`;

export const ellipsisWithOverflowTextStyle = (maxWidth: string) => css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: ${maxWidth};
`;
