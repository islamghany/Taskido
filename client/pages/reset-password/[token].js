import { Button } from "../../components/Button";
import { useMutation, useQuery } from "@apollo/react-hooks";
import ErrorMessage from "../../components/Error.js";
import LoadingPage from "../../components/LoadingPage.js";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER } from "../../components/User.js";
import { H1 } from "../../components/typo";
import { useForm } from "react-hook-form";
import {
  Form,
  Input,
  FormOr,
  ForgetPassword,
  StyledLink,
  FormSuccess,
} from "../../components/Form";

const IS_TOKEN_TRUE = gql`
  query isTokenTrue($token: String!) {
    isTokenTrue(token: $token) {
      message
    }
  }
`;
const RESET_PASSWORD = gql`
  mutation resetPassword($newPassword: String!, $resetPasswordLink: String!) {
    resetPassword(
      newPassword: $newPassword
      resetPasswordLink: $resetPasswordLink
    ) {
      message
    }
  }
`;
const RestPasswordForm = ({ token }) => {
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(IS_TOKEN_TRUE, { variables: { token } });
  const [
    resetPassword,
    { data: mutationData, error: mutationError, loading: mutationLoading },
  ] = useMutation(RESET_PASSWORD);
  console.log(queryData, queryError, queryLoading);
  const { register, handleSubmit, errors, watch } = useForm();
  const cp = watch("password");
  const onSubmit = ({ password }) => {
    resetPassword({
      variables: { newPassword: password, resetPasswordLink: token },
    });
  };
  const checkErrors = (type) => {
    if (type === "password" && errors && errors.password) {
      if (errors.password.type === "required") {
        return "Password is required";
      }
      if (errors.password.type === "minLength") {
        return "Password is too short, password must be at least 6 characters";
      }
      if (errors.password.type === "maxLength") {
        return "Password is too long, password must be at max 32 characters";
      }
    }
    if (type === "confirmPassword" && errors && errors.confirmPassword) {
      if (errors.confirmPassword.type === "required") {
        return "Password is required";
      }
      if (errors.confirmPassword.type === "minLength") {
        return "Password is too short, password must be at least 6 characters";
      }
      if (errors.confirmPassword.type === "maxLength") {
        return "Password is too long, password must be at max 32 characters";
      }
      if (errors.confirmPassword.type === "validate") {
        return "Password doesnot match";
      }
    }
    return null;
  };
  return (
    <div>
      <LoadingPage loading={queryLoading || mutationLoading} />
      <ErrorMessage error={queryError || mutationError} />
      {queryData && queryData.isTokenTrue && queryData.isTokenTrue.message ? (
        mutationData && mutationData.resetPassword ? (
          <FormSuccess>
            your password has been successfully updated, now go to{" "}
            <StyledLink href="/login">Log in</StyledLink>
            with new password
          </FormSuccess>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="form__heading">Enter Your new password</p>
            <Input
              name={"password"}
              register={register({
                required: true,
                minLength: 6,
                maxLength: 32,
              })}
              label="New Password"
              type="password"
              error={checkErrors("password")}
            />
            <Input
              name={"confirmPassword"}
              register={register({
                required: true,
                minLength: 6,
                maxLength: 32,
                validate: (value) => value === cp,
              })}
              label="Confirm your new password"
              type="password"
              error={checkErrors("confirmPassword")}
            />
            <Button
              className="contained block"
              loading={queryLoading || mutationLoading}
              type="primary"
            >
              Reset
            </Button>
          </form>
        )
      ) : queryError || mutationError ? null : (
        <p>Loading...</p>
      )}
    </div>
  );
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
        <H1 className="m-0 text-center">Reset Password</H1>
        <Form>
          <div className="container">
            {!token ? (
              <h3>Invalid token</h3>
            ) : (
              <RestPasswordForm token={token} />
            )}
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
