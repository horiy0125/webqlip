import { NextPage } from 'next';
import { fullWidthInlineBlockStyle } from '../styles';

const IndexPage: NextPage = () => {
  return (
    <div css={fullWidthInlineBlockStyle}>
      <h1>next-template</h1>
    </div>
  );
};

export default IndexPage;
