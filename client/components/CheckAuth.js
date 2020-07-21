import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER } from "./User";
import Router from "next/router";
import LoadingPage from "./LoadingPage.js";

const CheckAuth = ({ children, to }) => {
  const { data, error, loading } = useQuery(CURRENT_USER);
  if (loading) return <LoadingPage loading={true} />;
  if (!data || !data.user) {
    Router.replace(`/${to}`);
  }
  return <div>{children}</div>;
};
export default CheckAuth;
