import {
  Form,
  Input,
  FormOr,
  ForgetPassword,
  StyledLink,
  FormSuccess,
} from "../components/Form";
import { H1 } from "../components/typo";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import { CURRENT_USER } from "../components/User.js";
import ErrorMessage from "../components/Error.js";
import LoadingPage from "../components/LoadingPage.js";
import { Button } from "../components/Button";

const FORGET_PASSWORD = gql`
  mutation forgetPassword($email: String!) {
    forgetPassword(email: $email) {
      message
    }
  }
`;
const SignupForm = () => {
  const [forgetPassword, { data, error, loading }] = useMutation(
    FORGET_PASSWORD
  );
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = ({ email }) => {
    forgetPassword({ variables: { email } });
  };
  const checkErrors = (type) => {
    if (type === "email" && errors && errors.email) {
      if (errors.email.type === "required") {
        return "Email is required";
      }
      if (errors.email.type === "pattern") {
        return "Invalid Email";
      }
    }
    return null;
  };

  return (
    <div>
      <LoadingPage loading={loading} />
      <ErrorMessage error={error} />
      {data && data.forgetPassword && data.forgetPassword.message ? (
        <FormSuccess>
          An Email has been sent successfuly to {data.forgetPassword.message}.
          Please note that the information in this email will be invalid in 10
          minutes from now.
        </FormSuccess>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="heading mb-2">
            Please enter your email. You will recieve an email message with
            instruction on how to reset your password
          </p>
          <Input
            label="Email"
            name={"email"}
            register={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder="Enter your email"
            error={checkErrors("email")}
          />
          <Button className="contained block mt-2" type="primary">
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

const Signup = () => {
  const { data, error, loading } = useQuery(CURRENT_USER);
  if (data.user) {
    Router.replace("/");
  } else if ((!data || !data.user) && !loading)
    return (
      <div className="mt-2">
        <H1 className="m-0 text-center">Forget Password</H1>
        <Form>
          <div className="container">
            <SignupForm />
          </div>
        </Form>
        <div className="flex-center p-0 mb-5">
          <p className="mr-1">Already have an account?</p>
          <StyledLink href="/login">Log in</StyledLink>
        </div>
      </div>
    );
  return <LoadingPage />;
};
export default Signup;
