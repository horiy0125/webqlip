import Document, { Html, Head, Main, NextScript } from 'next/document';

class BaseDocument extends Document {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
