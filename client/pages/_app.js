import App from "next/app";
import Layout from "../components/Layout.js";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../lib/withData";
import "react-datepicker/dist/react-datepicker.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
