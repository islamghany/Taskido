import { Button } from "../../components/Button";
import { useMutation, useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../../components/Error.js";
import LoadingPage from "../../components/LoadingPage.js";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER } from "../../components/User.js";
import { H1 } from "../../components/typo";
import { Form, StyledLink, FormSuccess } from "../../components/Form";

const ACTIVATE_EMAIL = gql`
  query activateAccount($token: String!) {
    activateAccount(token: $token) {
      message
    }
  }
`;
const ActivateEmail = ({ token }) => {
  const { data, error, loading } = useQuery(ACTIVATE_EMAIL, {
    variables: { token },
  });
  if (loading) return <LoadingPage />;
  if (error) return <ErrorMessage error={error} />;
  if (data && data.activateAccount && data.activateAccount.message)
    return (
      <FormSuccess>
        conguratilation {data.activateAccount.message}, your accuout has been
        successfully activated. now go to{" "}
        <StyledLink href="/login">Log in</StyledLink>.
      </FormSuccess>
    );
  else return null;
};
const Activate = ({ query }) => {
  const token = query.token;
  console.log(token);
  const { data, error, loading } = useQuery(CURRENT_USER);
  if (data.user) {
    Router.replace("/");
  } else if ((!data || !data.user) && !loading)
    return (
      <div className="mt-2">
        <H1 className="m-0 text-center">Activate Email</H1>
        <Form>
          <div className="container">
            {!token ? <h3>Invalid token</h3> : <ActivateEmail token={token} />}
          </div>
        </Form>
        <div className="flex-center py-1">
          <p className="mr-1">New to taskido?</p>
          <StyledLink href="/signup">Sign up</StyledLink>
        </div>
      </div>
    );
  return <LoadingPage />;
};
export default Activate;
