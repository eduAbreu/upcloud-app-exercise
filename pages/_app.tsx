import React from 'react';
import { default as NextApp, AppContext } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout';
import ClientOnly from 'components/ClientOnly';

class App extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>

        {/* for simplicity, we run everything on Client Only in this project, ignoring Next.js's SSR */}
        <ClientOnly>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClientOnly>
      </>
    );
  }
}

export default App;
