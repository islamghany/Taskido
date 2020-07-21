import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CURRENT_USER } from "./User";
import LoadingPage from "./LoadingPage.js";

const SIGN_OUT = gql`
  mutation signout {
    signout {
      message
    }
  }
`;
const Signout = ({ children }) => {
  const [signout, { data, loading, error }] = useMutation(SIGN_OUT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });
  return (
    <div>
      <LoadingPage loading={loading} />
      <div style={{ display: "inline-block" }} onClick={signout}>
        {children}
      </div>
    </div>
  );
};
export default Signout;
