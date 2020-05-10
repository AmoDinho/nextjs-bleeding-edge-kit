import App from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/apollo";
import Page from "../components/Page";
import "../styles/index.css";
class MyApp extends App {
  static displayName = "Bleeding Edge";

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Page>
          <Component {...pageProps} {...this.props} />
        </Page>
      </ApolloProvider>
    );
  }
}
export default withApollo(MyApp);
