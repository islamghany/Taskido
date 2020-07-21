import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import LoadingPage from "./LoadingPage.js";

export const CURRENT_USER = gql`
  query currentUser {
    user: currentUser {
      id
      email
      name
    }
  }
`;
const User = ({ children }) => {
  const { data, error, loading } = useQuery(CURRENT_USER);
  return <div>{loading ? <LoadingPage loading={true} /> : children(data)}</div>;
};

export default User;
