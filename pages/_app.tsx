import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/lib/theme';

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
        <>
          <Head>
            <title>My page</title>
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
    );
  }
}
