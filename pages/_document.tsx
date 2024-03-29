import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';
import theme from '../src/lib/theme';
import '../src/styles/app.sass'

export default class MyDocument extends Document {
  render() {
    return (
        <html lang="ja">
        <Head>
          <meta charSet="utf-8"/>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main}/>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
